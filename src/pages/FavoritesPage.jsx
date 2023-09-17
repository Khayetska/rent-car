import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import NoContentFav from 'components/NoContentFav/NoContentFav';
import React, { useEffect, useState } from 'react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [carBrend, setCarBrend] = useState(null);
  const [carPrice, setCarPrice] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setFavorites(data);
  }, []);

  useEffect(() => {
    function filter() {
      try {
        if (carBrend && carPrice) {
          const filteredByBrendAndPrice = favorites
            .filter(car => car.make.toLowerCase() === carBrend)
            .filter(car => car.rentalPrice.replace('$', '') <= carPrice);

          setFavorites(filteredByBrendAndPrice);
          return;
        }

        if (carBrend) {
          const filteredByBrend = favorites.filter(
            car => car.make.toLowerCase() === carBrend
          );

          setFavorites(filteredByBrend);
          return;
        }

        if (carPrice) {
          const filteredByPrice = favorites.filter(
            car => car.rentalPrice.replace('$', '') <= carPrice
          );

          setFavorites(filteredByPrice);
          return;
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    filter();
  }, [carBrend, carPrice]);

  const onSubmit = data => {
    setCarBrend(data.brand);
    setCarPrice(data.price);
  };

  return (
    <>
      <Filter onSubmit={onSubmit} />
      {favorites.length > 0 ? <CarsList cars={favorites} /> : <NoContentFav />}
    </>
  );
}
