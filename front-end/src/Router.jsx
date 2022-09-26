import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Login from './pages/Login';

import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
