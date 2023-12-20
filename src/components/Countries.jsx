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

  return (
    <>
      <h2 id="title">Search Results</h2>
      
      <Box sx={{ maxWidth: "100%"  }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {countries.map((country) => (
            <Grid xs={3} >
              <Card sx={{ maxWidth: '90%'}}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={country.flags.png}
                  title={country.name.official}
                  onClick={() => details(country)}
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
