import React from 'react';
import sass from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import rental_logo from 'images/rental_logo.png';

const { header, conteiner, logo, nav, authNav } = sass;

export default function Header() {
  return (
    <header className={header}>
      <div className={conteiner}>
        <Link to={'/'}>
          <img src={rental_logo} alt="Logo of the company" className={logo} />
        </Link>
        <nav className={nav}>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/catalog'}>Catalog</NavLink>
            </li>
            <li>
              <NavLink to={'/favorites'}>Favorites</NavLink>
            </li>
          </ul>
        </nav>
        <ul className={authNav}>
          {/* <li>
            <a href="mailto:info@devstudio.com" class="auth-nav__link link">
              <svg class="envelope" width="16" height="12">
                <use href="./images/icons.svg#envelope"></use>
              </svg>
              info@devstudio.com
            </a>
          </li>
          <li>
            <a href="tel:380961111111" class="auth-nav__link link">
              <svg class="smartphone" width="10" height="16">
                <use href="./images/icons.svg#smartphone"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
