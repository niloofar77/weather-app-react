import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather></Weather>
        <footer>
          this project was coded by Niloofar Mousavi and is {""}
          <a
            href="https://github.com/niloofar77/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced by Github
          </a>
        </footer>
      </div>
    </div>
  );
}
