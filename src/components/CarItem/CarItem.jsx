import React, { useEffect, useState } from 'react';
import sass from './CarItem.module.scss';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import placeholder from 'images/placeholder.jpeg';
import sassImg from '../CarItemImg/CarItemImg.module.scss';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const { carImgWrapper, carImg, carImgOverlay, favoriteBtn, favoriteIcon } =
  sassImg;

const {
  carItem,
  infoWrapper,
  basicInfo,
  carTitle,
  carTitleAccent,
  extraInfo,
  extraInfoText,
  moreInfoButton,
} = sass;

export default function CarItem({ car, onToggle, favCars }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favorites'));

    storage.map(function (item) {
      if (item.id === id) setIsFavorite(true);
      return true;
    });
  }, [id]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      onToggle(prevState => [...prevState, ...[car]]);
    }

    const isAlreadyFavorite = favCars.map(item => item.id).includes(id);

    if (isAlreadyFavorite) {
      const items = JSON.parse(localStorage.getItem('favorites'));
      const filteredItems = items.filter(item => item.id !== id);
      localStorage.setItem('favorites', JSON.stringify(filteredItems));

      if (filteredItems.length === 0) {
        localStorage.removeItem('favorites');
      }

      onToggle(prevState => prevState.filter(item => item.id !== id));
      setIsFavorite(false);
    }
  };

  const splittedAddress = address.split(',');
  const [, city, country] = splittedAddress;

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <li className={carItem}>
        <div>
          {/* ---- Image ---- */}
          <div className={carImgWrapper}>
            <img
              src={img ?? placeholder}
              className={carImg}
              alt={
                img ? 'View of the car for rent' : 'There is no available image'
              }
            />
            <div className={carImgOverlay}></div>

            {/* ---- Favorite button ---- */}
            <button className={favoriteBtn} onClick={handleFavoriteToggle}>
              {isFavorite ? (
                <MdFavorite size={20} className={favoriteIcon} />
              ) : (
                <MdFavoriteBorder size={20} color="#fff" />
              )}
            </button>
          </div>

          {/* ---- Info ---- */}
          <div className={infoWrapper}>
            <div className={basicInfo}>
              <h3 className={carTitle}>
                {make} {model.length > 12 || make.length > 12 ? <br /> : ''}
                <span className={carTitleAccent}>{model}</span>, {year}
              </h3>
              <p className={carTitle}>{rentalPrice}</p>
            </div>
            <div className={extraInfo}>
              <p className={extraInfoText}>
                {city} | {country} | {rentalCompany}
              </p>
              <p className={extraInfoText}>
                {type} | {model} | {mileage} |{' '}
                {functionalities[0].length > 25
                  ? `${functionalities[0].slice(0, 25)}...`
                  : functionalities[0]}
              </p>
            </div>
          </div>
        </div>
        <button className={moreInfoButton} onClick={handleToggleModal}>
          Learn more
        </button>
      </li>

      {/* ---- Modal ---- */}
      {isOpenModal && (
        <ModalWindow
          isOpen={isOpenModal}
          onClose={handleToggleModal}
          car={car}
        />
      )}
    </>
  );
}
