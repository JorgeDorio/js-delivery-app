import React, { useState } from 'react';
import Context from './Context';
import Router from '../Router';

function Provider() {
  const [login, setLogin] = useState('');

  const context = { login, setLogin };

  return (
    <Context.Provider value={ context }>
      <Router />
    </Context.Provider>
  );
}

export default Provider;
