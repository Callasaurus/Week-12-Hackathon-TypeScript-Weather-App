import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import DisplayList from "./Components/DisplayList";

function App() {
  /* the state holding the input field to use when searching for a new city */
  const [input, setInput] = useState("");
  /* The state holding the response object returned from the fetch request after a search is initiated */
  const [city, setCity] = useState<any>({});
  /* the array of city objects which make up the main list */
  const [allCities, setAllCities] = useState<object[]>([]);

  /* grab the data from the server */
  async function doFetch() {
    const results = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=Y2TR7R2AL9M9DDLZNTV7UPV67&contentType=json`
    );
    const data = await results.json();
    console.log(data);
    setCity(data);
    return data;
  }

  /* add a new city to the list */
  function addWeather() {
    setAllCities([...allCities, city]);
  }

  /* if a city hasn't been searched for (city has no returned object in it)
   * then don't show the "add" button */
  if (Object.keys(city).length === 0) {
    return (
      <div className="App">
        <UserInput setInput={setInput} citiesMatch={city} />
        <button onClick={doFetch}>🌎 SEARCH 🌍</button>

        <div className="city-display">
          <h1>{city.resolvedAddress}</h1>
        </div>
        <hr />
        <DisplayList citiesMatch={allCities} setAllCities={setAllCities} />
      </div>
    );
  } else {
    /* otherwise DO show the button */
    return (
      <div className="App">
        <UserInput setInput={setInput} citiesMatch={city} />
        <button onClick={doFetch}>🌎 SEARCH 🌍</button>

        <div className="city-display">
          <h1>{city.resolvedAddress}</h1>
          <button id="add-button" onClick={addWeather}>ADD</button>
        </div>

        <hr />
        <DisplayList citiesMatch={allCities} setAllCities={setAllCities}/>
      </div>
    );
  }
}

export default App;
