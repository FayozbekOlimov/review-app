import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

const OverallRate = ({ rate }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1" fontWeight={700} color="warning.main">
        {rate}
      </Typography>
      <Rating value={rate} precision={0.5} readOnly size="small" />
    </Box>
  );
};

export default OverallRate;
