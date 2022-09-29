import React, { useEffect, useState } from 'react';
import { getSellers } from '../../services/api';

function DetalhesEnderecos() {
  const [sellers, setSellers] = useState([]);
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

  useEffect(() => {
    getSellersApi();
  }, []);

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
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default DetalhesEnderecos;
