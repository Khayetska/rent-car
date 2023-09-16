import React from 'react';
import sass from './Container.module.scss';

export default function Container({ children }) {
  return <div className={sass.container}>{children}</div>;
}
