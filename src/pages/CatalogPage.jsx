import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { getCars, getAllCars } from 'services/api';
import LoadMore from 'components/LoadMore/LoadMore';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getCars(page);
        const allResults = await getAllCars();

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

  const handleLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <CarsList cars={cars} />
      {isVisible && <LoadMore onClick={handleLoadMoreClick} />}
    </>
  );
}
