import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDropzone } from "react-dropzone";
import { ImageUploadBox, Label } from "./style";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const tags = ["fantasy", "sci-fi", "romance", "action"];

const CreateReview = () => {
  const [group, setGroup] = useState("");

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 1,
  });

  return (
    <Box component="form">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Label component="label" htmlFor="review-name">
            Review name
          </Label>
          <TextField fullWidth id="review-name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Label component="label" htmlFor="review-group">
            Group
          </Label>
          <Select
            id="review-group"
            value={group}
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="book">Book</MenuItem>
            <MenuItem value="game">Game</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-tags">
            Tags
          </Label>
          <Autocomplete
            id="review-tags"
            multiple
            options={tags}
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
              <TextField {...params} placeholder="Add a tag" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-image">
            Image
          </Label>
          <ImageUploadBox {...getRootProps()}>
            <input id="review-image" {...getInputProps()} />
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file) => (
                <Typography textAlign="left">{file.name}</Typography>
              ))
            ) : (
              <Typography textAlign="center">
                Drag and drop or click to select an image
              </Typography>
            )}
          </ImageUploadBox>
        </Grid>
        <Grid item xs={12}>
          <Label component="label" htmlFor="review-text">
            Review text
          </Label>
          <TextField id="review-text" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            type="submit"
          >
            Post a Review
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateReview;
