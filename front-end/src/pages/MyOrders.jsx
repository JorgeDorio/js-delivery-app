import { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { getCustomerOrders } from '../services/api';

function MyOrders() {
  const [data, setData] = useState();
  const [address, setAddress] = useState();

  const getData = async (id) => {
    const request = await getCustomerOrders(id);
    setData(request);
  };

  const formatDate = (date) => {
    let formated = date.split('-');
    formated[2] = formated[2].slice(0, 2);
    formated = `${formated[2]}/${formated[1]}/${formated[0]}`;
    return formated;
  };

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    setAddress(window.location.pathname.split('/')[1] !== 'customer');
    getData(id);
  }, []);

  return (
    <div>
      <Header />
      {data && data.map((order) => (<OrderCard
        key={ order.id }
        id={ order.id }
        status={ order.status }
        role={ window.location.pathname.split('/')[1] }
        date={ formatDate(order.saleDate) }
        address={ address ? `${order.deliveryAddress}, ${order.deliveryNumber}` : '' }
        totalPrice="23.80"
      />))}

    </div>
  );
}

export default MyOrders;
