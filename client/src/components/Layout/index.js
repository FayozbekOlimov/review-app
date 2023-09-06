import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl" sx={{ mt: { xs: 20, md: 12 } }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
