import { AppBar as MuiAppBar, Toolbar, Container, Grid } from "@mui/material";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import Language from "../Language";
import NavMenu from "../NavMenu";
import ToggleThemeButton from "../ToggleThemeButton";

const AppBar = () => {
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item>
              <Logo />
            </Grid>
            <Grid
              item
              sx={{
                order: { xs: 1, md: 0 },
                width: { xs: "100%", md: "35%" },
              }}
            >
              <SearchBar />
            </Grid>
            <Grid item>
              <Grid container spacing={1.5} alignItems="center">
                <Grid item>
                  <ToggleThemeButton />
                </Grid>
                <Grid item>
                  <Language />
                </Grid>
                <Grid item>
                  <NavMenu />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;
