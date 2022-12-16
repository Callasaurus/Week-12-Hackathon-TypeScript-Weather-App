import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import DisplayList from "./Components/DisplayList";

function App() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState<any>({});
  const [allCities, setAllCities] = useState<object[]>([]);

  async function doFetch() {
    const results = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=${process.env.REACT_APP_KEY}&contentType=json`
    );
    const data = await results.json();
    console.log(data);
    setCity(data);
    return data;
  }

  function addWeather() {
    setAllCities([...allCities, city]);
  }

  if (Object.keys(city).length === 0) {
    return (
      <div className="App">
        <UserInput setInput={setInput} citiesMatch={city} />
        <button onClick={doFetch}>🌎 SEARCH 🌍</button>

        <div className="city-display">
          <h1>{city.resolvedAddress}</h1>
        </div>
        <hr />
        <DisplayList citiesMatch={allCities} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <UserInput setInput={setInput} citiesMatch={city} />
        <button onClick={doFetch}>🌎 SEARCH 🌍</button>

        <div className="city-display">
          <h1>{city.resolvedAddress}</h1>
          <button id="add-button" onClick={addWeather}>
            ADD
          </button>
        </div>
        <hr />
        <DisplayList citiesMatch={allCities} />
      </div>
    );
  }
}

export default App;
