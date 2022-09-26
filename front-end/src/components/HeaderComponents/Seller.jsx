import React from 'react';
import '../../css/Header.css';

export default function SellerLinks() {
  return (
    <header className="links-container">

      <nav className="left-content-header">
        <div
          data-testid="customer_products__element-navbar-link-orders"
          className="element-navbar-link-orders"
        >
          <a href="/seller/orders">
            Pedidos
          </a>
        </div>
      </nav>

      <nav className="right-content-header">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="element-navbar-user-full-name"
        >
          <a href="/profile">
            Nome do user
          </a>
        </div>
        <div
          data-testid="customer_products__element-navbar-link-logout"
          className="element-navbar-link-logout"
        >
          <a href="/logout">
            Sair
          </a>
        </div>
      </nav>

    </header>
  );
}
