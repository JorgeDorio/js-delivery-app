import React from 'react';
import Table from '../components/CheckoutComponents/Table';
import Header from '../components/Header';

function Checkout() {
  return (
    <>
      <Header />
      <section>
        <h1>Finalizar Pedido</h1>
        <Table />
      </section>
    </>

  );
}

export default Checkout;
