import CarsList from 'components/CarsList/CarsList';
import React, { useEffect, useState } from 'react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    console.log(data);
    setFavorites(data);
  }, []);

  return (
    <div>
      <CarsList cars={favorites} />
    </div>
  );
}
