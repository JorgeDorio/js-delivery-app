import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AdminManage from './pages/AdminManage';
import CustomerProducts from './pages/CustomerProducts';
// import Home from './pages/Home';
import Login from './pages/Login';

import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/manage" element={ <AdminManage /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/logout" element={ <Login /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
