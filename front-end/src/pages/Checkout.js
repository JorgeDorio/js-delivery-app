import React from 'react';
import Table from '../components/CheckoutComponents/Table';
import Header from '../components/Header';
import DetalhesEnderecos from '../components/CheckoutComponents/DetalhesEnderecos';

function Checkout() {
  return (
    <>
      <Header />
      <section>
        <h1>Finalizar Pedido</h1>
        <Table />
      </section>
      <section>
        <h1>Detalhes e Endereço para Entrega</h1>
        <DetalhesEnderecos />
      </section>
    </>

  );
}

export default Checkout;
