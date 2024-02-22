import React, { useEffect } from 'react';
import sass from './ModalWindow.module.scss';
import placeholder from 'images/placeholder.jpeg';
import { AiOutlineClose } from 'react-icons/ai';

const {
  backdrop,
  open,
  modal,
  closeButton,
  closeButtonIcon,
  carImg,
  carTitle,
  extraInfoText,
  carDescription,
  carSybTitle,
  conditionsList,
  conditionsItem,
  rentalButton,
} = sass;

export default function ModalWindow({ isOpen = false, onClose, car }) {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    engineSize,
    fuelConsumption,
    rentalConditions,
    address,
    mileage,
  } = car;

  // disable scroll on body
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'unset');
  }, []);

  // close modal by 'esc'
  useEffect(() => {
    const handleEscClick = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscClick);

    return () => window.removeEventListener('keydown', handleEscClick);
  }, [onClose]);

  // close modal by clicking on backdrop
  const handleClickOnBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const splittedConditions = rentalConditions.split('\n');
  const [text, minAge] = splittedConditions[0].split(': ');

  const splittedAddress = address.split(',');
  const [, city, country] = splittedAddress;

  const backdropClassName = isOpen ? `${backdrop} ${open}` : backdrop;

  return (
    <div className={backdropClassName} onClick={handleClickOnBackdrop}>
      <div className={modal}>
        <button className={closeButton} type="button" onClick={onClose}>
          <AiOutlineClose size={20} className={closeButtonIcon} />
        </button>
        <img
          src={img ?? placeholder}
          onError={event => {
            event.currentTarget.src = placeholder;
            event.currentTarget.onerror = null;
          }}
          alt={img ? 'View of the car for rent' : 'There is no available image'}
          className={carImg}
        />
        {/* ---- Title ---- */}
        <h3 className={carTitle}>
          {make} <span>{model}</span>, {year}
        </h3>

        {/* ---- Extra info ----  */}
        <ul>
          <li className={extraInfoText}>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </li>
          <li className={extraInfoText}>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </li>
        </ul>
        <p className={carDescription}>{description}</p>

        {/* ---- Accessories and functionalities ---- */}
        <h4 className={carSybTitle}>Accessories and functionalities:</h4>
        <ul>
          <li className={extraInfoText}>
            {accessories.map((item, index) =>
              index !== accessories.length - 1 ? `${item} | ` : item
            )}{' '}
          </li>
          <li className={extraInfoText}>
            {functionalities.map((item, index) =>
              index !== accessories.length - 1 ? `${item} | ` : item
            )}
          </li>
        </ul>

        {/* ---- Rental Conditions ---- */}
        <h4 className={carSybTitle}>Rental Conditions:</h4>
        <ul className={conditionsList}>
          <li className={conditionsItem}>
            {text}: <span>{minAge}</span>
          </li>
          {splittedConditions.map(
            (item, index) =>
              index !== 0 && (
                <li key={item} className={conditionsItem}>
                  {item}
                </li>
              )
          )}
          <li className={conditionsItem}>
            Mileage: <span>{Intl.NumberFormat('en').format(mileage)}</span>
          </li>
          <li className={conditionsItem}>
            Price: <span>{rentalPrice.split('$')}$</span>
          </li>
        </ul>
        <a href="tel:+380730000000" className={rentalButton}>
          Rental car
        </a>
      </div>
    </div>
  );
}
