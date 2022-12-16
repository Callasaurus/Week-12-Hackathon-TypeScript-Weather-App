import { t_DisplayListProps } from "../Types";

export default function DisplayList({ citiesMatch }: t_DisplayListProps) {
  if (citiesMatch !== undefined) {
    return (
      <>
        {citiesMatch.map(({ resolvedAddress, description, days }: any) => {
          return (
            <div className="weather-child">
              <h1>{resolvedAddress}</h1>
              <h2>{description}</h2>
              <p>🌅 Sunrise: {days[0].sunrise}</p>
              <p>🌇 Sunset: {days[0].sunset}</p>
              <p>🌡 Temperature today: {days[0].temp}°C</p>
              <hr />
            </div>
          );
        })}
      </>
    );
  } else {
    return <div>No results</div>;
  }
}
