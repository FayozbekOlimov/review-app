import { Box, Rating, Typography } from "@mui/material";

const PercentageBar = ({ percentage, stars }) => {
  return (
    <Box display="flex" gap={1} width="100%" alignItems="center">
      <Box
        width="calc(100% - 140px)"
        height={8}
        backgroundColor="#ccc"
        borderRadius={4}
        position="relative"
      >
        <Box
          width={`${percentage}%`}
          height="100%"
          backgroundColor="info.main"
          borderRadius="inherit"
        />
      </Box>
      <Box display="flex" gap={1} justifyContent="space-between" width="140px">
        <Rating value={stars} readOnly size="small" color="warning" />
        <Typography variant="caption" color="info.main">
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageBar;
