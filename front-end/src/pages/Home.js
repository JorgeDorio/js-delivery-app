import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rockGlass from '../images/rockGlass.svg';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();

  // const time = 5000;

  useEffect(() => {
    // setTimeout(() => navigate('/login'), time);
    navigate('/login');
  }, []);

  return (
    <>
      <Header />
      <span className="logo">9Bar</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </>
  );
}

export default Home;
