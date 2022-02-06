import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="hanoi" />
      <footer>
        <p>
          This project was coded by <a href="">Huong Nguyen </a>
          and is <a href="">open-sourced on GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
