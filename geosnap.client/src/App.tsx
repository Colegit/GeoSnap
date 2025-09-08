import { useEffect, useState, type ReactElement } from "react";
import "./App.css";
import "react";
import "./index.css";

interface Forecast {
  date?: string | undefined;
  temperatureC?: number | undefined;
  temperatureF?: number | undefined;
  summary?: string | undefined;
}

const App = (props: Forecast): ReactElement => {
  const [forecasts, setForecasts] = useState<Forecast[]>();

  useEffect(() => {
    populateWeatherData();
  }, []);

  const contents =
    forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{" "}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{" "}
          for more details.
        </em>
      </p>
    ) : (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600" id="tableLabel">
        Weather forecast
      </h1>
      <p>
        This component demonstrates fetching data from the server nice{" "}
        {props.date}
      </p>
      {contents}

      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">DaisyUI Test</h1>
        <button className="btn btn-soft btn-primary">Click Me</button>
      </div>
    </div>
  );

  async function populateWeatherData() {
    const response = await fetch("weatherforecast");
    if (response.ok) {
      const data = await response.json();
      setForecasts(data);
    }
  }
};

export default App;
