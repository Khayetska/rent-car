import CarItem from 'components/CarItem/CarItem';
import React, { useEffect, useState } from 'react';
import sass from './CarsList.module.scss';
import Container from 'components/Container/Container';

export default function CarsList({ cars }) {
  const [favoriteCars, setFavoriteCars] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  return (
    <section>
      <Container>
        <ul className={sass.carsList}>
          {cars &&
            cars.map((car, index) => (
              <CarItem
                key={car.id + `${index}`}
                car={car}
                onToggle={setFavoriteCars}
                favCars={favoriteCars}
              />
            ))}
        </ul>
      </Container>
    </section>
  );
}
