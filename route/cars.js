import express from "express";
const carsRouter = express.Router();

const cars = [
  {
    id: 1,
    marque: "Toyota",
    modele: "Corolla",
    annee: 2022,
    couleur: "rouge",
  },
  {
    id: 2,
    marque: "Honda",
    modele: "Civic",
    annee: 2020,
    couleur: "bleu",
  },
  {
    id: 3,
    marque: "Ford",
    modele: "Mustang",
    annee: 2023,
    couleur: "noir",
  },
];
carsRouter.get("/cars", (req, res) => {
  res.render("cars", { cars });
});

carsRouter.get("/cars/:id", (req, res) => {
  const car = cars.find((car) => car.id === parseInt(req.params.id));
  res.json(car);
});

carsRouter.get("/addcar", (req, res) => {
  res.render("addCar");
});

carsRouter.post("/cars", (req, res) => {
  const car = {
    id: cars.length + 1,
    marque: req.body.marque,
    modele: req.body.modele,
    annee: req.body.annee,
    couleur: req.body.couleur,
  };

  cars.push(car);
  res.render("cars", { cars });
});

carsRouter.get("/updatecar/:id", (req, res) => {
  let { id } = req.params;
  const car = cars.find((car) => car.id === parseInt(id));
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  res.render("updateCar", { car });
});

carsRouter.put("/cars/:id", (req, res) => {
  let { id } = req.params;
  const car = cars.find((car) => car.id === parseInt(id));
  car.marque = req.body.marque;
  car.modele = req.body.modele;
  car.annee = req.body.annee;
  car.genre = req.body.genre;
  res.json(car);
});

carsRouter.delete("/cars/:id", (req, res) => {
  let { id } = req.params;
  const car = cars.find((car) => car.id === parseInt(id));
  const carId = cars.indexOf(car);
  cars.splice(carId, 1);
  res.json("car has been deleted");
  // res.render("cars");
});

export default carsRouter;
