import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSellers, createOrder } from '../../services/api';

function DetalhesEnderecos() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const products = JSON.parse(localStorage.getItem('carrinho'));
  const navigate = useNavigate();

  const getPrice = () => {
    const price = ((products.reduce((acc, product) => {
      if (Number(product.quantity) !== 0) {
        return acc + (Number(product.price) * Number(product.quantity));
      }
      return acc;
    }, 0)));
    return price;
  };

  const getSellersApi = async () => {
    const sellersAPI = await getSellers();
    const sellersName = sellersAPI.map((seller) => {
      const sellerPesonalite = {
        id: seller.id,
        name: seller.name,
      };
      return sellerPesonalite;
    });
    setSellers(sellersName);
  };

  const createBody = async (id) => {
    const saleDate = new Date(Date.now()).toISOString();
    const cart = products
      .map((item) => ({ productId: item.id, quantity: item.quantity }));
    const totalPrice = Number(getPrice());
    const user = JSON.parse(localStorage.getItem('user'));
    const body = {
      userId: user.id,
      sellerId: id,
      totalPrice,
      saleDate,
      status: 'PENDENTE',
      products: cart,
      deliveryNumber: number,
      deliveryAddress: address,
    };
    const order = await createOrder(body);
    navigate(`/customer/details/${order.id}`);
  };

  useEffect(() => {
    getSellersApi();
  }, []);

  useEffect(() => {
    getSellersApi();
  }, []);

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sellers">
        Vendedora
        <select id="sellers" name="seller" data-testid="customer_checkout__select-seller">
          {sellers.map((seller) => (
            <option key={ seller.id } value="xablau">{seller.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="endereco">
        Endereço
        <input
          onChange={ (e) => handleAddress(e) }
          type="text"
          data-testid="customer_checkout__input-address"
          id="endereco"
          name="endereco_entrega"
          placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        />
      </label>
      <label htmlFor="numero">
        Endereço
        <input
          data-testid="customer_checkout__input-address-number"
          type="text"
          id="numero"
          name="numero_entrega"
          placeholder="198"
          onChange={ (e) => handleNumber(e) }
        />
      </label>
      <button
        type="button"
        onClick={ () => createBody(sellers[0].id) }
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default DetalhesEnderecos;
