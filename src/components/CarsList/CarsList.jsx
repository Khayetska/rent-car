import CarItem from 'components/CarItem/CarItem';
import React from 'react';
import sass from './CarsList.module.scss';

export default function CarsList({ cars }) {
  return (
    <section>
      <ul className={sass.carsList}>
        {cars &&
          cars.map((car, index) => (
            <CarItem key={car.id + `${index}`} car={car} />
          ))}
      </ul>
    </section>
  );
}
