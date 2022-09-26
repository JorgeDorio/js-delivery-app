import React from 'react';
import '../css/Header.css';
import { useLocation } from 'react-router-dom';
import Costumer from './HeaderComponents/Costumer';
import Admin from './HeaderComponents/Admin';
import Seller from './HeaderComponents/Seller';

export default function Header() {
  const location = useLocation();
  return (
    <>
      {
        (location.pathname).includes('costumer') && <Costumer />
      }
      {
        (location.pathname).includes('admin') && <Admin />
      }
      {
        (location.pathname).includes('seller') && <Seller />
      }
    </>
  );
}
