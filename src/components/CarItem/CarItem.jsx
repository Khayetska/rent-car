import React, { useState } from 'react';
import sass from './CarItem.module.scss';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import CarItemImg from 'components/CarItemImg/CarItemImg';

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

export default function CarItem({ car }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
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

  const splittedAddress = address.split(',');
  const [, city, country] = splittedAddress;

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <li className={carItem}>
        <div>
          <CarItemImg img={img} />
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
