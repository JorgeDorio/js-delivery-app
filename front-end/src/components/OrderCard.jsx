// import react from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, status, date, totalPrice, address, role }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={ () => navigate(`/customer/details/${id}}`) }>
      <div data-testid={ `${role}_orders__element-order-id-${id}` }>
        Pedido
        <br />
        {id}
      </div>
      <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>
        {status}
      </p>
      <p data-testid={ `${role}_orders__element-order-date-${id}` }>{date}</p>
      <p
        data-testid={ `${role}_orders__element-card-price-${id}` }
      >
        {`R$ ${totalPrice}`}

      </p>
      <p
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        {`${address}`}

      </p>
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderCard;
