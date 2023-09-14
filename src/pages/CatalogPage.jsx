import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { getCars } from 'services/api';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getCars();

        setCars(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetch();
  }, []);

  return <CarsList cars={cars} />;
}
