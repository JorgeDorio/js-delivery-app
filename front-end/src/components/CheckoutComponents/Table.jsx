import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';

function Table() {
  const { productsArray, setProductsArray } = useContext(Context);
  const products = JSON.parse(localStorage.getItem('carrinho'));

  const removeItem = (id) => {
    const arrayFiltrado = productsArray.filter((product) => product.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(arrayFiltrado));
    setProductsArray(arrayFiltrado);
  };
  // console.log(productsArray);

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
                  `customer_checkout__element-order-table-item-number-${item}`
                }
              >
                { item + 1 }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${item}`
                }
              >
                { product.name }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${item}`
                }
              >
                { product.quantity }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${item}`
                }
              >
                { Number(product.price).toFixed(2).replace('.', ',') }

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${item}`
                }
              >
                { (Number(product.quantity) * Number(product.price))
                  .toFixed(2).replace('.', ',') }

              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => removeItem(product.id) }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${item}`
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
              if (Number(product.quantity) !== 0) {
                return acc + (Number(product.price) * Number(product.quantity));
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
