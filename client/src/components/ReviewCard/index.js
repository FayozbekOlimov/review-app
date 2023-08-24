import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import StarsIcon from "@mui/icons-material/Stars";
import { red } from "@mui/material/colors";
import {
  Avatar,
  Box,
  Rating,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { ReviewText } from "./style";

const ReviewCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        title="Atomic Habits"
        subheader="James Clear"
      />
      <CardMedia
        component="img"
        height="240"
        image="/images/book1.png"
        alt="Paella dish"
      />
      <CardContent sx={{ pb: 0.5 }}>
        <Rating
          name="average-rating"
          size="small"
          value={4.4}
          precision={0.1}
          readOnly
        />
        <ReviewText variant="body2">
          "Atomic Habits" is a transformative guide that redefines the way we
          approach personal growth. Written by James Clear, the book delves into
          the science of habits, unveiling the small yet powerful changes that
          can lead to remarkable results. Clear's insights emphasize the concept
          of "atomic habits" – tiny actions that compound over time to create
          significant, lasting improvements.
        </ReviewText>
      </CardContent>
      <CardActions disableSpacing>
        <Grid
          container
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Box display="flex" alignItems={"center"} gap={0.25}>
              <IconButton aria-label="add to favorites">
                <Rating
                  max={1}
                  icon={<FavoriteIcon color="error" />}
                  emptyIcon={<FavoriteBorderIcon color="error" />}
                />
              </IconButton>
              <Typography>{15}</Typography>
            </Box>
          </Grid>
          <Grid>
            <Box display="flex" alignItems={"center"} gap={0.25}>
              <IconButton aria-label="comments">
                <StarsIcon color="warning" />
              </IconButton>
              <Typography>{8}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems={"center"} gap={0.25}>
              <Typography>{22}</Typography>
              <IconButton aria-label="comments">
                <ChatBubbleOutlineIcon color="info" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ReviewCard;
