const { getCharacterName, getCharacterLocation, } = require("../pkg/rickandmorty");

const getCharacter = async (req, res) => {
    try{
        const data = await getCharacterName();
        return res.status(200).send(data);
    }catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};
const getCharacterByLocation = async (req, res) => {
    try{
        const data = await getCharacterLocation();
        return res.status(200).send(data);
    }catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};



module.exports = {
    getCharacter,
    getCharacterByLocation,
}
