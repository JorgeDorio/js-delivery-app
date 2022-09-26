import React, { useState } from 'react';
import PropTypes from 'prop-types';

const prefix = 'customer_products__';

function ProductCard({ name, id, price, url }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid={ `${prefix}element-card-price-${id}` }>
        {`R$ ${price.replace('.', ',')}`}
      </h1>
      <img data-testid={ `${prefix}img-card-bg-image-${id}` } src={ url } alt={ name } />
      <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
      <button
        data-testid={ `${prefix}button-card-rm-item-${id}` }
        type="button"
        onClick={ () => setCount(count + 1) }
      >
        +
      </button>
      <input
        type="number"
        value={ count }
        data-testid={ `${prefix}input-card-quantity-${id}` }
      />
      <button
        data-testid={ `${prefix}button-card-add-item-${id}` }
        type="button"
        onClick={ () => setCount(count - 1) }
      >
        -
      </button>
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
