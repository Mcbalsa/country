import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Countries from "./components/Countries";
import Search from './components/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='countries' element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
