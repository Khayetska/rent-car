import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import Contacts from 'components/Contacts/Contacts';
import sass from './Header.module.scss';
import rental_logo from 'images/rental_logo.png';

const { contentWrapper, logo, navList, active, inactive } = sass;

export default function Header() {
  const setActive = ({ isActive }) => (isActive ? active : inactive);

  return (
    <header>
      <Container>
        <div className={contentWrapper}>
          <Link to={'/'}>
            <img src={rental_logo} alt="Logo of the company" className={logo} />
          </Link>
          <nav>
            <ul className={navList}>
              <li>
                <NavLink to={'/'} className={setActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/catalog'} className={setActive}>
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink to={'/favorites'} className={setActive}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
          <Contacts />
        </div>
      </Container>
    </header>
  );
}
