import React from 'react';
import './App.css';
import Router from './Router';
import Provider from './context/Provider';

function App() {
  return (
    // <>
    <Provider>
      <Router />
    </Provider>
    // </>
  );
}

export default App;
