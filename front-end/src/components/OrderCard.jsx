// import react from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, status, date, totalPrice, address, role }) {
  const prefix = `${role}_orders__element`;
  const navigate = useNavigate();

  return (
    <button type="button" onClick={ () => navigate(`/customer/details/${id}}`) }>
      <div data-testid={ `${prefix}-order-id-${id}` }>
        Pedido
        <br />
        {id}
      </div>
      <p data-testid={ `${prefix}-delivery-status-${id}` }>
        {status}
      </p>
      <p data-testid={ `${prefix}-order-date-${id}` }>{date}</p>
      <p
        data-testid={ `${prefix}-card-price-${id}` }
      >
        {`R$ ${totalPrice}`}

      </p>
      <p
        data-testid={ `${prefix}-card-address-${id}` }
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
