import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getProductsById, updateStatus } from '../services/api';

function ProductsDetails() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const role = window.location.pathname.split('/')[1];
  const prefix = `${role}_order_details__element-order`;

  const getTotalPrice = (data_) => {
    const prices = data_.map((item) => item.price * item.quantity);
    const total = prices.reduce((a, b) => a + b);
    setTotalPrice(total);
  };

  const getData = async (id) => {
    const request = await getProductsById(id);
    const date = request.saleDate.split('-');
    date[2] = date[2].slice(0, 2);
    request.saleDate = `${date[2]}/${date[1]}/${date[0]}`;
    setData(request);
    setProducts(request.products);
    getTotalPrice(request.products);
  };

  useEffect(() => {
    const id = window.location.pathname.split('/')[3];
    getData(id);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Detalhes do Pedido</h1>
        <div>
          <div>
            <p data-testid={ `${prefix}-details-label-order-id` }>
              {`PEDIDO: ${data.id}`}
            </p>
            <p data-testid={ `${prefix}-details-label-seller-name` }>
              {`P. Vend: ${data.sellerName}`}
            </p>
            <p
              data-testid={ `${prefix}-details-label-order-date` }
            >
              {`${data.saleDate}`}
            </p>
            <p
              data-testid={ `${prefix}-details-label-delivery-status${data.id}` }
            >
              {`${data.status}`}
            </p>
            <button
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => updateStatus(data.id, 'ENTREGUE') }
              type="button"
              disabled
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <div>
            {products
              && products.map((item, index) => (
                <div key={ item.id }>
                  <span
                    data-testid={ `${prefix}-table-item-number-${item.id}` }
                  >
                    {index + 2}
                  </span>
                  <span
                    data-testid={ `${prefix}-table-name-${item.id}` }
                  >
                    {item.name}
                  </span>
                  <span
                    data-testid={ `${prefix}-table-quantity-${item.id}` }
                  >
                    {item.quantity}
                  </span>
                  <span
                    data-testid={ `${prefix}-table-unit-price-${item.id}` }
                  >
                    {item.price}
                  </span>
                  <span
                    data-testid={ `${prefix}-table-sub-total-${item.id}` }
                  >
                    {item.price * item.quantity}
                  </span>
                </div>
              ))}
          </div>
          <h1 data-testid={ `${prefix}-total-price` }>{`Total: R$ ${totalPrice}`}</h1>
        </div>
      </main>
    </div>
  );
}

export default ProductsDetails;
