import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const submitLogin = async (email, password) => {
  const response = api.post('/login', { email, password })
    .then((res) => {
      const result = res.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const createUser = async (name, email, password) => {
  const response = api.post('/register', { name, email, password })
    .then((returnApiRegister) => {
      const result = returnApiRegister.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getProducts = async () => {
  const response = api.get('/customer/products')
    .then((returnApiProducts) => {
      const result = returnApiProducts.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getSellers = async () => {
  const response = api.get('/users/sellers')
    .then((returnApiSellers) => {
      const result = returnApiSellers.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getProductsById = async (id) => {
  const response = api.get(`/pedidos/${id}`)
    .then((returnApiProducts) => {
      const result = returnApiProducts.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const admCreateUser = async (name, email, password, role) => {
  const userInfos = JSON.parse(localStorage.getItem('user'));
  console.log(userInfos.token);
  const response = api.post(
    '/admin/manage',
    { name, email, password, role },
    { headers: { authorization: userInfos.token } },
  )
    .then((returnApiRegister) => {
      const result = returnApiRegister.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const updateStatus = (id, status) => {
  const response = api.patch(`/pedidos/${id}`, { status })
    .then((returnApiRegister) => {
      const result = returnApiRegister.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getCustomerOrders = (id) => {
  const response = api.get(`/pedidos/c/${id}`)
    .then((returnApiProducts) => {
      const result = returnApiProducts.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const createOrder = async (body) => {
  const response = api.post('/pedidos', body)
    .then((returnApiRegister) => {
      const result = returnApiRegister.data;
      return result;
    })
    .catch(() => false);
  return response;
};

export {
  submitLogin,
  createUser,
  getProducts,
  getSellers,
  getProductsById,
  updateStatus,
  getCustomerOrders,
  admCreateUser,
  createOrder,
};
