import React from 'react';
import { GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import sass from './Contacts.module.scss';

const { authNavItem } = sass;

export default function Contacts() {
  return (
    <ul>
      <li className={authNavItem}>
        <GoMail size={20} />
        <a href="mailto:rental@car.com">rental@car.com</a>
      </li>
      <li className={authNavItem}>
        <BsTelephone size={20} />
        <a href="tel:380730000000">380730000000</a>
      </li>
    </ul>
  );
}
