import StarsIcon from "@mui/icons-material/Stars";
import { LogoText, LogoWrapper } from "./style";

const Logo = () => {
  return (
    <LogoWrapper to={"/"}>
      <StarsIcon sx={{ mr: 1 }} />
      <LogoText variant="h6" noWrap>
        Reviews
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
