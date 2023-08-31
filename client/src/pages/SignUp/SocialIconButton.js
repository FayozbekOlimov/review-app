import { IconButton } from "@mui/material";

const SocialIconButton = ({ icon: IconComponent, color }) => {
  return (
    <IconButton>
      <IconComponent sx={{ color, fontSize: "32px" }} />
    </IconButton>
  );
};

export default SocialIconButton;
