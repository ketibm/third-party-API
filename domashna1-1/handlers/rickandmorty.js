const { getCharacterStatus, getCharacterLocation, getCharacterEpisode } = require("../pkg/rickandmorty");

const getCharacter = async (req, res) => {
    try{
        const data = await getCharacterStatus(req.params.status);
        return res.status(200).send(data);
    }catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};
const getCharacterByLocation = async (req, res) => {
    try{
        const data = await getCharacterLocation(req.params.id);
        return res.status(200).send(data);
    }catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

const getCharacterByEpisode = async (req, res) => {
  try{
      const data = await getCharacterEpisode(req.params.id);
      return res.status(200).send(data);
  }catch (err) {
  return res.status(500).send("Internal Server Error");
}
};


module.exports = {
    getCharacter,
    getCharacterByLocation,
    getCharacterByEpisode
}
