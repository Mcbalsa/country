import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import HomePage from "./components/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='countries' element={<Countries />} />
        <Route path='details' element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
