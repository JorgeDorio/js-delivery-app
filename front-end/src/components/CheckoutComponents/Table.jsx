import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import '../../css/Table.css';

function Table() {
  const { productsArray, setProductsArray } = useContext(Context);
  const products = JSON.parse(localStorage.getItem('carrinho'));

  const removeItem = (id) => {
    const arrayFiltrado = productsArray.filter((product) => product.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(arrayFiltrado));
    setProductsArray(arrayFiltrado);
  };

  useEffect(() => {
    setProductsArray(products);
  }, []);
  // console.log(productsArray);
  return (
    <section className="sect">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, item) => (
            <tr
              className="cartp"
              key={ product.id }
            >
              <td
                className="item"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${item + 1}`
                }
              >
                { item + 1 }

              </td>
              <td
                className="desc"
                data-testid={
                  `customer_checkout__element-order-table-name-${item + 1}`
                }
              >
                { product.name }

              </td>
              <td
                className="qty"
                data-testid={
                  `customer_checkout__element-order-table-quantity-${item + 1}`
                }
              >
                { product.quantity }

              </td>
              <td
                className="vu"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${item + 1}`
                }
              >
                R$
                { product.price }

              </td>
              <td
                className="sb"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${item + 1}`
                }
              >
                R$
                { (product.quantity * product.price).toFixed(2) }

              </td>
              <td>
                <button
                  className="btnr"
                  type="button"
                  onClick={ () => removeItem(product.id) }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${item + 1}`
                  }
                >
                  Remover
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <div className="total-price">
        <h1>
          Total: R$
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
    </section>
  );
}

export default Table;
