import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="input-user">
          <input type="text" placeholder="Enter City Name..." />
          <button className="btn">Submit</button>
        </div>

        <div className="main-temp">
          <h1>33&deg;C</h1>
          <h3>Lahore, Punjab</h3>
        </div>
        <div className="cards-main">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
}

export default App;
