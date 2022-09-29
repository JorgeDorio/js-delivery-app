import React from 'react';
import Table from '../components/CheckoutComponents/Table';
import Header from '../components/Header';
import '../css/Checkout.css';

function Checkout() {
  return (
    <>
      <Header />
      <h1 className="check-title">Finalizar Pedido</h1>
      <Table />
      <h1
        className="fp"
      >
        Finalizar Pedido
      </h1>
    </>

  );
}

export default Checkout;
