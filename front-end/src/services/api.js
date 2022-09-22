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
    .catch((error) => console.log(error));
  return response;
};

// const request = await api
//       .post('/login', { username, password })
//       .catch(() => false);
//     if (!request) {
//       setWrongCredentials(true);
//     } else {
//       localStorage.setItem('user', username)
//       navigate('/home');
//     }
//   };

export default submitLogin;
