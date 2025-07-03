import "./App.css";
import "./index.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(city);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`;
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);

      //store results in a state function
      setWeather(data);
    } catch (error) {
      console.error("cannot get", error);
    }
  };

  return (
    <div className="main-container">
      <form className="input-user" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
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
              <p>{weather.main.temp}</p>
            </div>
            <div className="card">
              <strong>Humidity</strong>
              <p>{weather.main.humidity}</p>
            </div>
            <div className="card">
              <strong>Feels Like</strong>
              <p>{weather.main.feels_like}</p>
            </div>
            <div className="card">
              <strong>Feels Like</strong>
              <p>{weather.weather[0].main}</p>
            </div>
            <div className="card">
              <strong>Sea Level</strong>
              <p>{weather.main.sea_level}</p>
            </div>
            <div className="card">
              <strong>Wind</strong>
              <p>{weather.wind.speed}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
