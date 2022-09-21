import React, { useMemo, useState } from 'react';
import Context from './Context';
import Router from '../Router';

function Provider() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [ableBtn, setAbleBtn] = useState(true);

  const ProviderValue = useMemo(() => (
    {
      email,
      setEmail,
      password,
      setPassword,
      name,
      setName,
      ableBtn,
      setAbleBtn,
    }), [email, password, name, ableBtn]);

  return (
    <Context.Provider value={ ProviderValue }>
      <Router />
    </Context.Provider>
  );
}

export default Provider;
