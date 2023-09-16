import React from 'react';
import sass from './LoadMore.module.scss';

const { button } = sass;

export default function LoadMore({ onClick }) {
  return (
    <button onClick={onClick} className={button} type="button">
      Load more
    </button>
  );
}
