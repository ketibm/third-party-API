const { getCityWeather, getCityWeatherDaily} = require("../pkg/openweathermap");

const getForCity = async (req, res) => {
    try{ 
        const data = await getCityWeather(req.params.city);
        return res.status(200).send(data);
    }catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const getForCityDaily = async (req, res) => {
    try{
        const data = await getCityWeatherDaily(req.params.city);
        return res.status(200).send(data);
    }catch (err) {
        return res.status(500).send("Internal Server Error");
      }
};
module.exports = {
    getForCity,
    getForCityDaily,
  };