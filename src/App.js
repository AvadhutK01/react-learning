import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  const countFunction = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setTimeout(() => clearInterval(interval), 10000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={countFunction}>{count}</button>
      </header>
    </div>
  );
}

export default App;
