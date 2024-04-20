const auto = {
  brand: "Tesla",
  model: "ModelX",
  details: {
    // color: "red",
    year: 2021,
    atStock: true,
    availabilitOfCar() {
      console.log(auto.details.color);
    },
  },
};

const cars = [auto];

cars.forEach((car) => {
  console.log(
    `${car.brand} ${car.details?.year} : цвет - ${car.details?.color}`
  );
});

auto.details.availabilitOfCar?.();
