const express = require("express");
const { getSection } = require("./pkg/config");
const { getCharacter, getCharacterByLocation, } = require("./handlers/rickandmorty");
const app = express();

app.get("/api/character", getCharacter);
app.get("/api/location", getCharacterByLocation);

app.listen(getSection("cartoon").port, () => {
    console.log(`Server started at port ${getSection("cartoon").port}`);
  });