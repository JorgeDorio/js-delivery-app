import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState('');

  async function fetchData() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    fetchData();
    console.log('renderizou');
  }, []);

  return (
    <>
      <Header />
      { console.log(products) }
      { products && products.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          name={ product.name }
          url={ product.url_image }
          price={ product.price }
        />
        // <h1 key={ product.id }>Oi</h1>
      )) }
    </>
  );
}

export default CustomerProducts;
