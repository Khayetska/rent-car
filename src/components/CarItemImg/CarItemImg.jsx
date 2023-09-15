import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import sass from './CarItemImg.module.scss';
import placeholder from 'images/placeholder.jpeg';

const { carImgWrapper, carImg, carImgOverlay, favoriteBtn, favoriteIcon } =
  sass;

export default function CarItemImg({ img }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={carImgWrapper}>
      <img
        src={img ?? placeholder}
        className={carImg}
        alt={img ? 'View of the car for rent' : 'There is no available image'}
      />
      <div className={carImgOverlay}></div>
      <button className={favoriteBtn} onClick={handleFavoriteToggle}>
        {isFavorite ? (
          <MdFavorite size={20} className={favoriteIcon} />
        ) : (
          <MdFavoriteBorder size={20} color="#fff" />
        )}
      </button>
    </div>
  );
}
