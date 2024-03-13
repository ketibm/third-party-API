const express = require("express");
const { getSection } = require("./pkg/config");
const { getCharacter, getCharacterByLocation, getCharacterByEpisode } = require("./handlers/rickandmorty");
const app = express();

app.get("/api/character/:status", getCharacter);
app.get("/api/location", getCharacterByLocation);
app.get("/api/episode/:id", getCharacterByEpisode);

app.listen(getSection("cartoon").port, () => {
    console.log(`Server started at port ${getSection("cartoon").port}`);
  });