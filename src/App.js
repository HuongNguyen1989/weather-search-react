import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="hanoi" />
      <footer>
        <p className="mt-1">
          This project was coded by <a href="/">Huong Nguyen </a>
          and is{" "}
          <a
            href="https://github.com/HuongNguyen1989/weather-search-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and
          <a
            href="https://frosty-torvalds-77a814.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify{" "}
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
