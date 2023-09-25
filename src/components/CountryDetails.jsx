import { useLocation } from "react-router-dom";
import Map from "./Map";

function CountryDetails() {
  const { state } = useLocation();
  const country = state.country;
  console.log(country);

  const currencies = Object.values(country.currencies);
  const languages = Object.values(country.languages);

  const currencyList = currencies.map((currency) => (
    <li key={currency}>
      {currency.name}: ({currency.symbol})
    </li>
  ));

  const languageList = languages.map((language) => (
    <li key={language}>{language}</li>
  ));

  const timezonesList = country.timezones.map((timezone) => (
    <li key={timezone}>{timezone}</li>
  ));

  const lat = country.latlng[0];
  const long = country.latlng[1];

  return (
    <>
      <div id="detailsContainer">
        <div id="details">
          <div id="general">
            <h4>{country.name.official}</h4>
            <img
              style={{ height: "120px", width: "280px" }}
              src={country.flags.png}
            />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toLocaleString("en-US")}</p>
            <p>Subregion: {country.subregion}</p>
          </div>
          <div id="currencies">
            <p>
              <b>Currencies:</b>
            </p>
            <ul>{currencyList}</ul>
          </div>
          <div id="langs">
            <p>
              <b>Languages:</b>
            </p>
            <ul>{languageList}</ul>
          </div>
          <div id="timezones">
            <p>
              <b>Timezones: </b>
            </p>
            <ul>{timezonesList}</ul>
          </div>
        </div>
        <div id="Map">
          <Map lat={lat} long={long} />
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
