import { Grid } from "@mui/material";
import Search from "./Search";

function HomePage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid>
          <h3 className="text-center">Search</h3>
          <Search />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
