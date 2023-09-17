import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import NoContentFav from 'components/NoContentFav/NoContentFav';
import {
  filtereByBrend,
  filtereByPrice,
  filterByMileage,
} from 'helpers/filter';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [carBrend, setCarBrend] = useState(null);
  const [carPrice, setCarPrice] = useState(null);
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setFavorites(data);
  }, []);

  useEffect(() => {
    function filter() {
      if (carBrend && carPrice) {
        const filteredByBrend = filtereByBrend(favorites, carBrend);
        const filteredByBrendAndPrice = filtereByPrice(
          filteredByBrend,
          carPrice
        );
        setFavorites(filteredByBrendAndPrice);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(
            filteredByBrendAndPrice,
            maxMileage,
            minMileage,
            setFavorites
          );
        }

        return;
      }
      if (carBrend) {
        const filteredByBrend = filtereByBrend(favorites, carBrend);
        setFavorites(filteredByBrend);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(
            filteredByBrend,
            maxMileage,
            minMileage,
            setFavorites
          );
        }

        return;
      }
      if (carPrice) {
        const filteredByPrice = filtereByPrice(favorites, carPrice);
        setFavorites(filteredByPrice);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(
            filteredByPrice,
            maxMileage,
            minMileage,
            setFavorites
          );
        }
      }

      if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
        filterByMileage(favorites, maxMileage, minMileage, setFavorites);
      }
    }

    filter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carBrend, carPrice, maxMileage, minMileage]);

  const onSubmit = data => {
    setCarBrend(data.brand);
    setCarPrice(data.price);
    setMinMileage(Number(data.min));
    setMaxMileage(Number(data.max));
  };

  return (
    <>
      <Filter onSubmit={onSubmit} />
      {favorites.length > 0 ? <CarsList cars={favorites} /> : <NoContentFav />}
    </>
  );
}
