import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was coded by <a href="">Huong Nguyen </a>
            and is <a href="">open-sourced on GitHub</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
