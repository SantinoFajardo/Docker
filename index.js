const express = require("express");
const mongoose = require("mongoose");

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();

mongoose.connect("mongodb://santino:password@monguito:27017");

app.get("/", async (req, res) => {
  console.log("listando chanchitos...");
  const animales = await Animal.find();
  return res.send(animales);
});
app.get("/crear", async (req, res) => {
  console.log("creando...");
  await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
  return res.send("ok");
});

app.listen(3000, () => console.log("listening..."));
