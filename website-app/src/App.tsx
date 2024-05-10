import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ModelMenu from './components/ModelMenu';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      {/* Aquí puedes usar los componentes Header, ModelMenu y MainContent */}
      <Header />
      <ModelMenu />
      <MainContent />

      {/* También puedes mantener el código existente si lo necesitas */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
