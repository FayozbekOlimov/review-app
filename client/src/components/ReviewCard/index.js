import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating, IconButton, Typography, Button } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import {
  ActionWrapper,
  CardActionArea,
  CardContentBox,
  CardContentDetails,
  CardImage,
  CardImageBox,
  CardWrapper,
  ReviewGrade,
} from "./style";

const ReviewCard = ({ _id, reviewName, image, grade, date }) => {
  return (
    <CardWrapper>
      <CardImageBox>
        <CardImage component="img" image={image} alt="Atomic Habits" />
        <CardActionArea>
          <ActionWrapper elevation={4}>
            <IconButton aria-label="add to favorites">
              <Rating
                max={1}
                icon={<FavoriteIcon color="error" />}
                emptyIcon={<FavoriteBorderIcon color="error" />}
              />
            </IconButton>
          </ActionWrapper>
          <ReviewGrade elevation={4}>{grade}</ReviewGrade>
        </CardActionArea>
      </CardImageBox>
      <CardContentBox>
        <Typography fontWeight={500}>{reviewName}</Typography>
        <CardContentDetails>
          <Rating value={4.4} precision={0.1} size="small" readOnly />
          <Typography variant="caption" fontStyle="italic">
            {date ? `${formatDistanceToNow(new Date(date))} ago` : "..."}
          </Typography>
        </CardContentDetails>
        <Button
          fullWidth
          LinkComponent={Link}
          to={`/reviews/${_id}`}
          size="small"
          variant="text"
          sx={{ textTransform: "none" }}
        >
          Read this Review
        </Button>
      </CardContentBox>
    </CardWrapper>
  );
};

export default ReviewCard;
