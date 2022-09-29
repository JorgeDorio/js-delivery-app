import React from 'react';
import Table from '../components/CheckoutComponents/Table';
import Header from '../components/Header';
import '../css/Checkout.css';
import DetalhesEnderecos from '../components/CheckoutComponents/DetalhesEnderecos';

function Checkout() {
  return (
    <>
      <Header />
      <h1 className="check-title">Finalizar Pedido</h1>
      <Table />
      <section>
        <h1>Detalhes e Endereço para Entrega</h1>
        <DetalhesEnderecos />
      </section>
    </>
  );
}

export default Checkout;
