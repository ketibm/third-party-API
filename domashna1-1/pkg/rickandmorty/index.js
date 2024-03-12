const { getSection } = require("../config");

const CACHE = {};
const CACHE1 = {};

const getCharacterName = async (character) => {
    console.log("CACHE", CACHE);

    let now = new Date().getTime() / 1000;

    if( CACHE[character] && now < CACHE[character].timestamp + getSection("cartoon").cache_expiery) {
        return CACHE[character];
    }
    const URL = `${
        getSection("cartoon").API_URL
      }/character`;
   
      try{
        const res = await fetch(URL);
        // const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

    CACHE[character] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };
      }catch (err) {
    throw err;
  }
};

const getCharacterLocation = async (location) => {
    console.log("CACHE1", CACHE1);

    let now = new Date().getTime() / 1000;

    if( CACHE1[location] && now < CACHE1[location].timestamp + getSection("cartoon").cache_expiery) {
        return CACHE1[location];
    }
    // const URL = `${
    //     getSection("cartoon").API_URL
    //   }/location/[3,22]`;

      try{
        // const res = await fetch(URL);
        const res = await fetch("https://rickandmortyapi.com/api/location");
        const data = await res.json();

    CACHE1[location] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };
      }catch (err) {
    throw err;
  }
};

module.exports = {
    getCharacterName,
    getCharacterLocation,
}