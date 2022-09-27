import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';
import '../css/CustomerProducts.css';

function CustomerProducts() {
  const [products, setProducts] = useState('');

  async function fetchData() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    fetchData();
    console.log(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <>
      <Header />
      { console.log(products) }
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
    </>
  );
}

export default CustomerProducts;
