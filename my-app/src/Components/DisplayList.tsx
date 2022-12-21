import { t_DisplayListProps } from "../Types";

export default function DisplayList({
  setAllCities,
  citiesMatch,
}: t_DisplayListProps) {
  console.log("DisplayList: ", citiesMatch);

  function deleteCity(resolvedAddress: string) {
    setAllCities(
      citiesMatch.filter((city: any) => {return city.resolvedAddress !== resolvedAddress;}));}

  if (citiesMatch !== undefined) {
    return (
      <>
        {citiesMatch.map(({ resolvedAddress, description, days }: any, index) => {
            
            let cName = "weather-child";

            if (days[0].temp < 0) cName += " frozen";
            else if (days[0].temp > 0 && days[0].temp < 10) cName += " cold";
            else if (days[0].temp > 10 && days[0].temp < 20) cName += " warm";
            else if (days[0].temp > 20) cName += " hot";

            return (
              <div className={cName}>
                <h1> {resolvedAddress}
                  <button className="buttonDelete"onClick={() => {deleteCity(resolvedAddress);}}>DELETE</button>
                </h1>
                <h2>{description}</h2>
                <p className="suntext">🌝 Sunrise: {days[0].sunrise}</p>
                <p className="suntext">🌚 Sunset: {days[0].sunset}</p>
                <p>🌡 Temperature today: {days[0].temp}°C</p>
                <hr />
              </div>
            );
          }
        )}
      </>
    );
  } else {
    return <div>No results</div>;
  }
}
