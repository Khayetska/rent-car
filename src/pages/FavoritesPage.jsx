import CarsList from 'components/CarsList/CarsList';
import NoContentFav from 'components/NoContentFav/NoContentFav';
import React, { useEffect, useState } from 'react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    setFavorites(data);
  }, []);

  return (
    <>
      {favorites.length > 0 ? <CarsList cars={favorites} /> : <NoContentFav />}
    </>
  );
}
