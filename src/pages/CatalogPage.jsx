import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { getCars, getAllCars } from 'services/api';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';
import {
  filtereByBrend,
  filtereByPrice,
  filterByMileage,
} from 'helpers/filter';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [allCars, setAllCars] = useState(null);
  const [carBrend, setCarBrend] = useState(null);
  const [carPrice, setCarPrice] = useState(null);
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getCars(page);
        const allResults = await getAllCars();

        setAllCars(allResults);

        setCars(prevState => [...prevState, ...result]);

        if (page === allResults.length / 8) {
          setIsVisible(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    fetch();
  }, [page]);

  useEffect(() => {
    function filter() {
      if (carBrend && carPrice) {
        const filteredByBrend = filtereByBrend(allCars, carBrend);
        const filteredByBrendAndPrice = filtereByPrice(
          filteredByBrend,
          carPrice
        );

        setCars(filteredByBrendAndPrice);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(
            filteredByBrendAndPrice,
            maxMileage,
            minMileage,
            setCars
          );
        }

        return;
      }

      if (carBrend) {
        const filteredByBrend = filtereByBrend(allCars, carBrend);

        setCars(filteredByBrend);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(filteredByBrend, maxMileage, minMileage, setCars);
        }

        return;
      }

      if (carPrice) {
        const filteredByPrice = filtereByPrice(allCars, carPrice);

        setCars(filteredByPrice);

        if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
          filterByMileage(filteredByPrice, maxMileage, minMileage, setCars);
        }
      }

      if (Number(maxMileage) !== 0 || Number(minMileage) !== 0) {
        filterByMileage(allCars, maxMileage, minMileage, setCars);
      }
    }

    filter();
  }, [allCars, carBrend, carPrice, minMileage, maxMileage]);

  const handleLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const onSubmit = data => {
    setCarBrend(data.brand);
    setCarPrice(data.price);
    setMinMileage(Number(data.min));
    setMaxMileage(Number(data.max));
  };

  const check = !carBrend && !carPrice;

  return (
    <>
      <Filter onSubmit={onSubmit} />
      <CarsList cars={cars} />
      {isVisible && check && <LoadMore onClick={handleLoadMoreClick} />}
    </>
  );
}
