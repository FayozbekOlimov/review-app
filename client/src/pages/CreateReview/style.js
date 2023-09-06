import { Box, styled, Typography } from "@mui/material";

export const Label = styled(Typography)({
  display: "inline-block",
  marginBottom: "4px",
});

export const ImageUploadBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #afaeae",
  padding: "14px",
  textAlign: "center",
  borderRadius: theme.spacing(1),

  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));
