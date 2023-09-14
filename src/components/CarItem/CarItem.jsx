import React from 'react';
import sass from './CarItem.module.scss';
import placeholder from 'images/placeholder.jpeg';

const {
  carImgWrapper,
  carImg,
  carImgOverlay,
  infoWrapper,
  basicInfo,
  carTitle,
  carTitleAccent,
  extraInfo,
  extraInfoText,
  moreInfoButton,
} = sass;

export default function CarItem({ car }) {
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

  console.log('IntelliSafe advanced safety feature'.slice(0, 27));
  return (
    <li>
      <div className={carImgWrapper}>
        <img
          src={img ?? placeholder}
          className={carImg}
          alt={img ? 'View of the car for rent' : 'There is no available image'}
        />
        <div className={carImgOverlay}></div>
      </div>
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
      <button className={moreInfoButton}>Learn more</button>
    </li>
  );
}
