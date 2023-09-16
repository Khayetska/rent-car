import React from 'react';
import sass from './NoContentFav.module.scss';

const { background, text } = sass;

export default function NoContentFav() {
  return (
    <div className={background}>
      <p className={text}>You haven't added any cars to your favorites</p>
    </div>
  );
}
