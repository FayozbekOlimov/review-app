import {
  Avatar,
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { formatDistanceToNow } from "date-fns";
import SendIcon from "@mui/icons-material/Send";
import Title from "../../components/Title";

const Comments = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} my={2}>
      <Title variant="h5" fontWeight={400}>
        Comments
      </Title>
      <Box display="flex" gap={2}>
        <Avatar sx={{ bgcolor: green[500], mr: 0, p: 3 }} aria-label="avatar">
          F
        </Avatar>
        <Box display="flex" alignItems="flex-end" gap={0.5} width="100%">
          <TextField
            placeholder="Leave a comment"
            multiline
            rows={3}
            fullWidth
            color="primary"
            focused
          />
          <Button variant="contained" size="small" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" gap={2}>
        <Avatar sx={{ bgcolor: green[500], mr: 0, p: 3 }} aria-label="avatar">
          J
        </Avatar>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Typography fontWeight={500}>John Doe</Typography>
          <Typography variant="caption" fontStyle={"italic"}>
            {formatDistanceToNow(new Date("2023-08-28T04:42:55.869Z"))} ago
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, ad tempora voluptate aut rerum, exercitationem quas
            porro nisi enim consequuntur libero repellat optio deleniti maxime,
            voluptates ipsam? Assumenda, eos voluptatibus?
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" gap={2}>
        <Avatar sx={{ bgcolor: green[500], mr: 0, p: 3 }} aria-label="avatar">
          B
        </Avatar>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Typography fontWeight={500}>Bruce Wayne</Typography>
          <Typography variant="caption" fontStyle={"italic"}>
            {formatDistanceToNow(new Date("2023-08-27T04:42:55.869Z"))} ago
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, ad tempora voluptate aut rerum, exercitationem quas
            porro nisi enim consequuntur libero repellat optio deleniti maxime,
            voluptates ipsam? Assumenda, eos voluptatibus?
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" gap={2}>
        <Avatar sx={{ bgcolor: green[500], mr: 0, p: 3 }} aria-label="avatar">
          A
        </Avatar>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Typography fontWeight={500}>Alex</Typography>
          <Typography variant="caption" fontStyle={"italic"}>
            {formatDistanceToNow(new Date("2023-07-28T04:42:55.869Z"))} ago
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, ad tempora voluptate aut rerum, exercitationem quas
            porro nisi enim consequuntur libero repellat optio deleniti maxime,
            voluptates ipsam? Assumenda, eos voluptatibus?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Comments;
