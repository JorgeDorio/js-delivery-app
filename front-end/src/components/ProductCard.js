import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ProductCard.css';
import Context from '../context/Context';

const prefix = 'customer_products__';

function ProductCard({ name, id, price, url }) {
  const [count, setCount] = useState(0);
  const { setProductsArray } = useContext(Context);

  const emptyLocalStorage = () => {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    if (!storage || storage.length === 0) {
      localStorage.setItem('carrinho', JSON.stringify([]));
    }
  };

  useEffect(() => {
    localStorage.removeItem('carrinho');
    emptyLocalStorage();
  }, []);

  const plus = () => {
    setCount(count + 1);
    const object = {
      id,
      name,
      price,
      url,
      quantity: 1,
    };
    const getProduct = JSON.parse(localStorage.getItem('carrinho'));
    const findById = getProduct.find((product) => product.id === object.id);
    if (findById) {
      findById.quantity += 1;
    } else {
      getProduct.push(object);
    }
    localStorage.setItem('carrinho', JSON.stringify(getProduct));
    setProductsArray(getProduct);
  };

  const minus = () => {
    if (count > 0) setCount(count - 1);
    const object = {
      id,
      name,
      price,
      url,
      quantity: 1,
    };
    const getProduct = JSON.parse(localStorage.getItem('carrinho'));
    const findById = getProduct.find((product) => product.id === object.id);
    if (findById && findById.quantity >= 1) {
      findById.quantity -= 1;
      console.log(getProduct);
      localStorage.setItem('carrinho', JSON.stringify(getProduct));
      setProductsArray(getProduct);
    }
    // if (findById.quantity === 0) {
    //   const newArray = getProduct.filter((product) => product.id === object.id);
    //   // console.log(newArray);
    //   localStorage.removeItem('productsInCar');
    //   localStorage.setItem('productsInCar', JSON.stringify(newArray));
    //   setProductsArray(newArray);
    // }
  };

  return (
    <div className="product-card">
      <h1 data-testid={ `${prefix}element-card-price-${id}` }>
        {`R$ ${price.replace('.', ',')}`}
      </h1>
      <img
        data-testid={ `${prefix}img-card-bg-image-${id}` }
        src={ url }
        alt={ name }
        className={ `img-${id}-product` }
      />
      <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
      <div className="quantity">
        <button
          data-testid={ `${prefix}button-card-add-item-${id}` }
          type="button"
          onClick={ minus }
          className="btn-minus"
        >
          -
        </button>
        <input
          type="number"
          value={ count }
          data-testid={ `${prefix}input-card-quantity-${id}` }
          min="0"
          readOnly
        />
        <button
          data-testid={ `${prefix}button-card-rm-item-${id}` }
          type="button"
          onClick={ plus }
          className="btn-plus"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProductCard;
