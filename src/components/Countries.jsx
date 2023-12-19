import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Countries() {
  const { state } = useLocation();
  const data = state.data;
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);

  function details(country) {
    navigate("/details", { state: { country } });
  }

  const fetchData = async () => {
    await axios
      .get(data)
      .then((data) => setCountries(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const listItems = countries.map((country) => (

  //   <li
  //     key={country.name.official}
  //   >
  //     <div className="container">
  //       <img
  //         style={{ height: "100px", width: "200px", borderStyle: "solid" }}
  //         src={country.flags.png}
  //       />
  //       <h3>{country.name.official}</h3>
  //       <button type="button" className="btn btn-primary" onClick={() => details(country)}>Get Details</button>
  //     </div>
  //   </li>
  // ));

  return (
    <>
      <h2 id="title">Search Results</h2>
      {/* <ul id="results">{listItems}</ul> */}
      <Box sx={{ maxWidth: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {countries.map((country) => (
            <Grid xs={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={country.flags.png}
                  title={country.name.official}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.official}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Countries;
