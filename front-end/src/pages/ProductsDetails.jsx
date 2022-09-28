import react, { useEffect, useState } from 'react';
import Header from '../components/Header'
import { getProductsById, updateStatus } from '../services/api';

const ProductsDetails = () => {
  const [data, setData] = useState({})
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)


  const getTotalPrice = (data) => {
    const prices = data.map((item) => item.price * item.quantity)
    const total = prices.reduce((a, b) => a + b)
    setTotalPrice(total)
  }

  const getData = async (id) => {
    const request = await getProductsById(id);
    const date = request.saleDate.split('-');
    date[2] = date[2].slice(0, 2)
    request.saleDate = `${date[2]}/${date[1]}/${date[0]}`
    setData(request)
    setProducts(request.products)
    getTotalPrice(request.products)
  }

  useEffect(() => {
    const id = window.location.pathname.split('/')[2]
    getData(id)
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1 >Detalhes do Pedido</h1>
        <div>
          <div>
            <p data-testid="customer_order_details__element-order-details-label-order-id">{`PEDIDO: ${data.id}`}</p>
            <p data-testid="customer_order_details__element-order-details-label-seller-name">
              {`P. Vend: ${data.sellerName}`}
            </p>
            <p data-testid="customer_order_details__element-order-details-label-order-date">{`${data.saleDate}`}</p>
            <p data-testid={`customer_order_details__element-order-details-label-delivery-status${data.id}`}>{`${data.status}`}</p>
            <button data-testid="customer_order_details__button-delivery-check" onClick={() => updateStatus(data.id, 'ENTREGUE')} type='button'>MARCAR COMO ENTREGUE</button>
          </div>
          <div>
            {products && products.map((item, index) => {
              return (
                <div key={item.id}>
                  <span data-testid={`customer_order_details__element-order-table-item-number-${item.id}`}>{index + 2}</span>
                  <span data-testid={`customer_order_details__element-order-table-name-${item.id}`}>{item.name}</span>
                  <span data-testid={`customer_order_details__element-order-table-quantity-${item.id}`}>{item.quantity}</span>
                  <span data-testid={`customer_order_details__element-order-table-unit-price-${item.id}`}>{item.price}</span>
                  <span data-testid={`customer_order_details__element-order-table-sub-total-${item.id}`}>{item.price * item.quantity}</span>
                </div>
              )
            })}
          </div>
          <h1 data-testid={`customer_order_details__element-order-total-price`}>{`Total: R$ ${totalPrice}`}</h1>
        </div>
      </main>
    </div>
  )
}

export default ProductsDetails;
