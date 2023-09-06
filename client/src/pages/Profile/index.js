import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Typography>Profile</Typography>
      <Button
        LinkComponent={Link}
        to="/create-review"
        variant="text"
        size="small"
        sx={{ textTransform: "none" }}
      >
        Create Review
      </Button>
    </>
  );
};

export default Profile;
