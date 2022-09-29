import React, { useMemo, useState } from 'react';
import Context from './Context';
import Router from '../Router';

function Provider() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('seller');
  const [ableBtn, setAbleBtn] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [productsArray, setProductsArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const ProviderValue = useMemo(() => (
    {
      email,
      setEmail,
      password,
      setPassword,
      name,
      setName,
      role,
      setRole,
      ableBtn,
      setAbleBtn,
      notFound,
      setNotFound,
      productsArray,
      setProductsArray,
      totalPrice,
      setTotalPrice,
    }), [email, password, name, role, ableBtn, notFound, productsArray]);

  return (
    <Context.Provider value={ ProviderValue }>
      <Router />
    </Context.Provider>
  );
}

export default Provider;
