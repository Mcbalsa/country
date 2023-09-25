import { useLocation, useNavigate } from "react-router-dom";

function Countries() {
  const { state } = useLocation();
  const data = state.data;
  const navigate = useNavigate();

  function details(country) {
    navigate('/details', {state: {country}})
  }

  const listItems = data.map((country) => (
    
    <li
      key={country.name.official}
    >
      <div className="container">
        <img
          style={{ height: "100px", width: "200px", borderStyle: "solid" }}
          src={country.flags.png}
        />
        <h3>{country.name.official}</h3>
        <button type="button" className="btn btn-primary" onClick={() => details(country)}>Get Details</button>
      </div>
    </li>
  ));

  return (
    <>
    <h2 id="title">Serach Results</h2>
      <ul id="results">{listItems}</ul>
    </>
  );
}

export default Countries;
