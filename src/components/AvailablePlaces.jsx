import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  

useEffect(()=> {

    async function fetchPlaces() {
      setIsFetching(true);
      const responseJson = await fetch('http://localhost:3000/places');
      const response = await responseJson.json();
      setAvailablePlaces(response.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  console.log("availablePlaces", availablePlaces);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
    />
  );
}
