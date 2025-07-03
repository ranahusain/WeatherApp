import "./App.css";
import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`;

      const res = await axios.get(url);
      const data = res.data;
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };
  return (
    <div className="main-container">
      <form className="input-user" onSubmit={submitForm}>
        <Search search={search} setSearch={setSearch} />
        <button className="btn">Submit</button>
      </form>

      {weather && (
        <>
          <div className="main-temp">
            <h1>{weather.main.temp}&deg;C</h1>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
          </div>
          <div className="cards-main">
            <div className="card">
              <strong>Temprature</strong>
              <p>{weather.main.temp}&deg;C</p>
            </div>
            <div className="card">
              <strong>Humidity</strong>
              <p>
                {weather.main.humidity} g/m<sup>3</sup>
              </p>
            </div>
            <div className="card">
              <strong>Feels Like</strong>
              <p>{weather.main.feels_like}&deg;C</p>
            </div>
            <div className="card">
              <strong>Sky</strong>
              <p>{weather.weather[0].main}</p>
            </div>
            <div className="card">
              <strong>Sea Level</strong>
              <p>{weather.main.sea_level} m</p>
            </div>
            <div className="card">
              <strong>Wind</strong>
              <p>{weather.wind.speed} km/h</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
// return (
//   <>
//     {/* <div className="search-bar">
//       <Search />
//     </div> */}
//     <Body />
//   </>
// );
