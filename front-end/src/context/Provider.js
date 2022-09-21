import React, { useMemo, useState } from 'react';
import Context from './Context';
import Router from '../Router';

function Provider() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const ProviderValue = useMemo(() => (
    { email, setEmail, password, setPassword, name, setName }), [email, password, name]);

  return (
    <Context.Provider value={ ProviderValue }>
      <Router />
    </Context.Provider>
  );
}

export default Provider;
