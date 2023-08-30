import { Box, Rating, Typography } from "@mui/material";
import { LineInner, LineOuter, RatingBox } from "./style";

const PercentageBar = ({ percentage, stars }) => {
  return (
    <Box display="flex" gap={1} width="100%" alignItems="center">
      <LineOuter>
        <LineInner width={`${percentage}%`} />
      </LineOuter>
      <RatingBox>
        <Rating value={stars} readOnly size="small" color="warning" />
        <Typography variant="caption" color="info.main" fontWeight={500}>
          {percentage}%
        </Typography>
      </RatingBox>
    </Box>
  );
};

export default PercentageBar;
