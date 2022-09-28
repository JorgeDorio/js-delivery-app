import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';

function Table() {
  const { productsArray, setProductsArray } = useContext(Context);
  const products = JSON.parse(localStorage.getItem('carrinho'));

  useEffect(() => {
    setProductsArray(products);
  }, []);
  // console.log(productsArray);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricação</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, item) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${item + 1}`
                }
              >
                { item + 1 }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${item + 1}`
                }
              >
                { product.name }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${item + 1}`
                }
              >
                { product.quantity }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${item + 1}`
                }
              >
                { product.price }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${item + 1}`
                }
              >
                { product.quantity * product.price }

              </td>
              <td>
                <button
                  type="button"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${item + 1}`
                  }
                >
                  Remover Item
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <div>
        <h1>
          Total:
          <span data-testid="customer_checkout__element-order-total-price">
            {((productsArray.reduce((acc, product) => {
              if (product.quantity !== 0) {
                return acc + (Number(product.price) * product.quantity);
              }
              return acc;
            }, 0)).toFixed(2)).replace('.', ',')}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Table;
