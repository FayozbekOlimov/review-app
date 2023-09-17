import { Box, Skeleton } from "@mui/material";
import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
      <Box position={"relative"}>
        <Skeleton
          animation={"wave"}
          variant={"rounded"}
          width={"100%"}
          height={300}
        />
        <Box
          position={"absolute"}
          right={8}
          top={8}
          display={"flex"}
          gap={1}
          zIndex={2}
        >
          <Skeleton
            animation={"wave"}
            variant={"circular"}
            width={44}
            height={44}
          />
          <Skeleton
            animation={"wave"}
            variant={"circular"}
            width={44}
            height={44}
          />
        </Box>
      </Box>
      <Skeleton animation={"wave"} width={"75%"} />
      <Box display={"flex"} gap={1} justifyContent={"space-between"}>
        <Skeleton animation={"wave"} width={"50%"} />
        <Skeleton animation={"wave"} width={"50%"} />
      </Box>
      <Skeleton animation={"wave"} height={32} />
    </Box>
  );
};

export default ReviewCardSkeleton;
