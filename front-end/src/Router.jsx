import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import AdminManage from './pages/AdminManage';
import CustomerProducts from './pages/CustomerProducts';
import MyOrders from './pages/MyOrders';
// import Home from './pages/Home';
import Login from './pages/Login';
import ProductsDetails from './pages/ProductsDetails';

import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={ <ProductsDetails /> } />
        <Route path="/:role/orders/:id" element={ <MyOrders /> } />
        <Route path="/admin/manage" element={ <AdminManage /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/logout" element={ <Login /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
