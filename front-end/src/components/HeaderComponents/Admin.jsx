import React from 'react';
import '../../css/Header.css';

export default function AdminLinks() {
  return (
    <header className="links-container">

      <nav className="left-content-header">
        <div
          id="customer_products__element-navbar-link-orders"
          className="element-navbar-link-orders"
        >
          <a href="/admin/manage">
            Gerenciar Usuários
          </a>
        </div>
      </nav>

      <nav className="right-content-header">
        <div
          id="customer_products__element-navbar-user-full-name"
          className="element-navbar-user-full-name"
        >
          <a href="/profile">
            Nome do user
          </a>
        </div>
        <div
          id="customer_products__element-navbar-link-logout"
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
