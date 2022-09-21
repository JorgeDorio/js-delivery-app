import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import Router from './Router';
import Provider from './context/Provider';

function App() {
  return (
    // <>
    <Provider>
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
      <Router />
    </Provider>
    // </>
  );
}

export default App;
