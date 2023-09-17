export const filtereByBrend = (cars, carBrend) => {
  const filteredByBrend = cars.filter(
    car => car.make.toLowerCase() === carBrend
  );

  return filteredByBrend;
};

export const filtereByPrice = (cars, carPrice) => {
  const filteredByPrice = cars.filter(
    car => Number(car.rentalPrice.replace('$', '')) <= Number(carPrice)
  );

  return filteredByPrice;
};

const filtereByMin = (cars, minMileage) => {
  const filtered = cars.filter(car => car.mileage >= minMileage);

  return filtered;
};

const filterByMax = (cars, maxMileage) => {
  const filtered = cars.filter(car => car.mileage <= maxMileage);

  return filtered;
};

export const filterByMileage = (cars, maxMileage, minMileage, setCars) => {
  if (maxMileage && minMileage !== 0) {
    const filteredByMin = filtereByMin(cars, minMileage);
    const filteredByMinAndMax = filterByMax(filteredByMin, maxMileage);

    setCars(filteredByMinAndMax);

    return;
  }

  if (minMileage > 0) {
    const filteredByMin = filtereByMin(cars, minMileage);

    setCars(filteredByMin);
    return;
  }

  if (maxMileage > 0) {
    const filteredByMax = filterByMax(cars, maxMileage);

    setCars(filteredByMax);
    return;
  }
};
