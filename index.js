import express from "express";
import carsRouter from "./route/cars.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", carsRouter);

app.listen(port, () => {
  console.log("Welcome to our cars API using express");
});
