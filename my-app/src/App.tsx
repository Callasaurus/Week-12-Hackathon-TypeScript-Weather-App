import React, {useState, useEffect} from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import DisplayList from './Components/DisplayList';
import {t_City} from "./Types"

function App() {
  
  const [input, setInput] = useState('')
  const [city, setCity] = useState<t_City>({});
  const [allCities, setAllCities] = useState<object[]>([])
  
    async function doFetch() {
      const results = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=Y2TR7R2AL9M9DDLZNTV7UPV67&contentType=json`)
      const data = await results.json();
      console.log(data);
      setCity(data);
      return data;
    }
  
     function addWeather() {
      setAllCities([...allCities, city])
    }

  return (
    <div className="App">
      <UserInput setInput={setInput} citiesMatch={city}/>
      <button onClick={doFetch}>Search</button>
      
      <div>
      <h1>{city.resolvedAddress}</h1>
      <button onClick={addWeather}>Add</button>
      </div>
     
      <DisplayList citiesMatch={allCities}/>
    </div>
  );
}

export default App;
