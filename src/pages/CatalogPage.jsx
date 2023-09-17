import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { getCars, getAllCars } from 'services/api';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [allCars, setAllCars] = useState(null);
  const [carBrend, setCarBrend] = useState(null);
  const [carPrice, setCarPrice] = useState(null);

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
      try {
        if (carBrend && carPrice) {
          const filteredByBrendAndPrice = allCars
            .filter(car => car.make.toLowerCase() === carBrend)
            .filter(car => car.rentalPrice.replace('$', '') <= carPrice);

          setCars(filteredByBrendAndPrice);
          return;
        }

        if (carBrend) {
          const filteredByBrend = allCars.filter(
            car => car.make.toLowerCase() === carBrend
          );

          setCars(filteredByBrend);
          return;
        }

        if (carPrice) {
          const filteredByPrice = allCars.filter(
            car => car.rentalPrice.replace('$', '') <= carPrice
          );

          setCars(filteredByPrice);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    filter();
  }, [allCars, carBrend, carPrice]);

  const handleLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const onSubmit = data => {
    setCarBrend(data.brand);
    setCarPrice(data.price);
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
