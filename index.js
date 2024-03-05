import express from "express";
import carsRouter from "./route/cars.js";
import path from "path";

const port = 8080;
const app = express();
const __dirname = new URL("./views", import.meta.url).pathname;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const viewsDirectory = path.join(path.resolve(), "views");

app.set("view engine", "ejs");
app.set("views", viewsDirectory);

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", carsRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
