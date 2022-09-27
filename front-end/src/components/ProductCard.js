import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ProductCard.css';

const prefix = 'customer_products__';

function ProductCard({ name, id, price, url }) {
  const [count, setCount] = useState(0);
  return (
    <div className="product-card">
      <h1 data-testid={ `${prefix}element-card-price-${id}` }>
        {`R$ ${price.replace('.', ',')}`}
      </h1>
      <img data-testid={ `${prefix}img-card-bg-image-${id}` } src={ url } alt={ name } />
      <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
      <div className="quantity">
        <button
          data-testid={ `${prefix}button-card-add-item-${id}` }
          type="button"
          onClick={ () => { if (count > 0) setCount(count - 1); } }
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
          onClick={ () => setCount(count + 1) }
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
