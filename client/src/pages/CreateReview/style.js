import { Box, styled, Typography } from "@mui/material";

export const Label = styled(Typography)({
  display: "inline-block",
  marginBottom: "4px",
});

export const ImageUploadBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #afaeae",
  padding: "16px",
  textAlign: "center",
  borderRadius: theme.spacing(0.5),
  cursor: "pointer",

  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

export const Image = styled("img")({
  maxWidth: "400px",
  width: "100%",
  height: "auto",
  objectFit: "cover",
});
