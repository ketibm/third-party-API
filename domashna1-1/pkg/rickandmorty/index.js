const { getSection } = require("../config");

const CACHE = {};
const CACHE1 = {};
const CACHE2 = {};

const getCharacterName = async (status) => {
    console.log("CACHE", CACHE);

    let now = new Date().getTime() / 1000;

    if(CACHE[status] && now < CACHE[status].timestamp + getSection("cartoon").cache_expiery) {
        return CACHE[status];
    }
    const URL = `${
        getSection("cartoon").API_URL
      }?&status=${status}`;
   
      try{
        const res = await fetch(URL);
        const data = await res.json();

    CACHE[status] = {
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
    //   }/location[2,3,122]`;

      try{
        // const res = await fetch(URL);
        const res = await fetch("https://rickandmortyapi.com/api/location/[2,122]");
        const data = await res.json();

    CACHE1[location] = {
      timestamp: new Date().getTime() / 1000,
      data: data,
    };
      }catch (err) {
    throw err;
  }
};

const getCharacterEpisode = async (id) => {
  console.log("CACHE2", CACHE2);

  let now = new Date().getTime() / 1000;

  if(CACHE2[id] && now < CACHE2[id].timestamp + getSection("cartoon").cache_expiery) {
      return CACHE2[id];
  }
  const URL = `${
      getSection("cartoon").API_URL_2
    }/${id}`;
 
    try{
      const res = await fetch(URL);
      const data = await res.json();

  CACHE2[id] = {
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
    getCharacterEpisode
}