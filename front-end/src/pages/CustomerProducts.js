import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';
import '../css/CustomerProducts.css';
import Context from '../context/Context';

function CustomerProducts() {
  const [products, setProducts] = useState('');
  // const [totalPrice, setTotalPrice] = useState(0);
  const { productsArray, setProductsArray } = useContext(Context);
  const navigate = useNavigate();

  async function fetchData() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    fetchData();
    const getProduct = JSON.parse(localStorage.getItem('carrinho'));
    if (getProduct) setProductsArray(getProduct);
  }, []);

  return (
    <>
      <Header />
      { console.log(productsArray) }
      <section className="main-customer">
        { products && products.map((product) => (
          <ProductCard
            key={ product.id }
            id={ product.id }
            name={ product.name }
            url={ product.url_image }
            price={ product.price }
          />
        )) }
      </section>
      <button
        disabled={ productsArray.length === 0 }
        className="btn-car"
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver Carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">
          {((productsArray.reduce((acc, product) => {
            if (product.quantity !== 0) {
              return acc + (Number(product.price) * product.quantity);
            }
            return acc;
          }, 0)).toFixed(2)).replace('.', ',')}
        </span>
      </button>
    </>
  );
}

export default CustomerProducts;
