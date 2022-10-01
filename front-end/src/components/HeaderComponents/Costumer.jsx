import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Header.css';

export default function CostumerLinks() {
  useEffect(() => {
    JSON.parse(localStorage.getItem('user'));
  }, []);
  const { name } = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/logout');
  };

  return (
    <header className="links-container">

      <nav className="left-content-header">
        <div
          data-testid="customer_products__element-navbar-link-products"
          className="element-navbar-link-products"
        >
          <a href="/customer/products">
            Produtos
          </a>
        </div>
        <div
          data-testid="customer_products__element-navbar-link-orders"
          className="element-navbar-link-orders"
        >
          <a href="/customer/orders">
            Meus pedidos
          </a>
        </div>
      </nav>

      <nav className="right-content-header">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="element-navbar-user-full-name"
        >
          <a href="/profile">
            { name }
          </a>
        </div>
        <div
          data-testid="customer_products__element-navbar-link-logout"
          className="element-navbar-link-logout"
        >
          <a href="/logout" onClick={ logout }>
            Sair
          </a>
        </div>
      </nav>

    </header>
  );
}
