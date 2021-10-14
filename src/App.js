import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          heroku-github-actions sample
        </p>
        <a
          className="App-link"
          href="https://github.com/couch-coding/heroku-actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          view codes
        </a>
        <a
          className="App-link"
          href="https://github.com/couch-coding/heroku-actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          view blogs 
        </a>
      </header>
    </div>
  );
}

export default App;
