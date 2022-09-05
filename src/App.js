import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <p>
          What word are you looking for?
          <br />
          <Dictionary />
        </p>
        <footer>
          <a
            className="App-link"
            href="https://github.com/angelajazz/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Angela Jazz
        </footer>
      </header>
    </div>
  );
}

export default App;
