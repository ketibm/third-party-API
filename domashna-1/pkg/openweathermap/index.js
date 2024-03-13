const { getSection } = require("../config");

const CACHE = {};
const CACHE1 = {};

const getCityWeather = async (city) => {
    console.log("CACHE", CACHE);

    let now = new Date().getTime() / 1000;

    if (CACHE[city] && now < CACHE[city].timestamp + getSection("weather").cache_expiery) {
        return CACHE[city];
    }
    const URL = `${getSection("weather").API_URL}/weather?q=${city}&units=metric&appid=${getSection("weather").api_key}`;
    try {
        const res = await fetch(URL);
        const data = await res.json();

        CACHE[city] = {
            timestamp: new Date().getTime() / 1000,
            data: data,
          };
    }catch (err) {
    throw err;
  }
};

const getCityWeatherForFiveDays = async (city) => {
    console.log("CACHE1", CACHE1);
    let now = new Date().getTime() / 1000;
    if (
      CACHE1[city] &&
      now < CACHE1[city].timestamp + getSection("weather").cache_expiery_fivedays
    ) {
      return CACHE1[city];
    }
    const URL = `${
        getSection("weather").API_URL_5DAYS
    }/forecast?q=${city}&appid=${getSection("weather").api_key}`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
  
      CACHE1[city] = {
        timestamp: new Date().getTime() / 1000,
        data: data,
      };
    } catch (err) {
      throw err;
    }
  };
  
  
  module.exports = {
    getCityWeather,
    getCityWeatherForFiveDays,
  };
