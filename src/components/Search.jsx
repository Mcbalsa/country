import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("name/");
  
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const param = inputType + input
    const baseUrl = "https://restcountries.com/v3.1/";
    const search = baseUrl + param;
    sendData(search)

  };

  function sendData (data) {
    navigate('/countries', {state:{ data }})
  };


  return (
    <>
      <div id="search">
        <form onSubmit={handleSubmit}>
          
          <div className="input-group mb-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            >
              <option value="name/">Name</option>
              <option value="currency/">Currency</option>
              <option value="lang/">Language</option>
            </select>
            <button type="submit" className="btn btn-outline-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
