import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDropzone } from "react-dropzone";
import { Image, ImageUploadBox, Label } from "./style";
import Title from "../../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { createReview } from "../../store/review/createReviewSlice";
import UploadImage from "./ImageUpload";
import axios from "../../api/axios";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const tags = ["fantasy", "sci-fi", "romance", "action"];

const CreateReview = () => {
  const [group, setGroup] = useState("");
  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = async (files) => {
    const file = files[0];
    setUploadedImage(file);
    const base64 = await convertBase64(file);
    uploadSingleImage(base64);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
    },
    multiple: false,
  });

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { status, error } = useSelector((state) => state.createReview);

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      dispatch(createReview(formData));
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ====================================================
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadSingleImage = (base64) => {
    axios
      .post("/uploadImage", { image: base64 })
      .then((res) => {
        setValue("image", res.data);
      })
      .catch(console.log);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h5">Create Review</Title>
      <Grid container spacing={2} py={2}>
        <Grid item xs={12} md={4}>
          <Label component="label" htmlFor="review-name">
            Review name
          </Label>
          <Controller
            name="reviewName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="review-name"
                variant="outlined"
                error={!!errors.reviewName}
                helperText={errors.reviewName ? "Review name is required" : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Label component="label" htmlFor="review-grade">
            Grade
          </Label>
          <Controller
            name="grade"
            control={control}
            defaultValue=""
            rules={{
              required: "Grade is required",
              min: { value: 0, message: "Grade must be at least 0" },
              max: { value: 10, message: "Grade must be at most 10" },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="number"
                id="review-name"
                variant="outlined"
                error={!!errors.grade}
                helperText={errors.grade ? errors.grade.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Label component="label" htmlFor="review-group">
            Group
          </Label>
          <Controller
            name="group"
            control={control}
            defaultValue=""
            rules={{ required: "Group is required" }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.group}>
                <Select
                  {...field}
                  id="review-group"
                  fullWidth
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                >
                  <MenuItem value="movie">Movie</MenuItem>
                  <MenuItem value="book">Book</MenuItem>
                  <MenuItem value="game">Game</MenuItem>
                </Select>
                {errors.group && (
                  <FormHelperText>{errors.group.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-tags">
            Tags
          </Label>
          <Controller
            name="tags"
            control={control}
            defaultValue={[]}
            rules={{ required: "Tags are required" }} // Include the required rule
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.tags}>
                <Autocomplete
                  {...field}
                  id="review-tags"
                  multiple
                  options={tags}
                  value={field.value || []}
                  onChange={(_, newValue) => field.onChange(newValue)}
                  disableCloseOnSelect
                  renderOption={(props, option, { selected }) => (
                    <MenuItem {...props} style={{ padding: "0" }}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                      />
                      {option}
                    </MenuItem>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Add a tag"
                      error={!!errors.tags}
                    />
                  )}
                />
                {errors.tags && (
                  <FormHelperText>{errors.tags.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-image">
            Image
          </Label>
          <ImageUploadBox {...getRootProps()}>
            <input {...getInputProps()} />
            {uploadedImage ? (
              <Image
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded image"
              />
            ) : (
              <Typography variant="body2" color="textSecondary">
                {getRootProps().isDragActive
                  ? "Drop the image here..."
                  : "Drag and drop an image here, or click to select an image (PNG or JPG)."}
              </Typography>
            )}
          </ImageUploadBox>
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-text">
            Review text
          </Label>
          <Controller
            name="reviewText"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="review-text"
                multiline
                rows={4}
                fullWidth
                error={!!errors.reviewText}
                helperText={errors.reviewText ? "Review text is required" : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Posting..." : "Post a Review"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateReview;
