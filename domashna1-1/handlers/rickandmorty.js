const { getCharacterName, getCharacterLocation, } = require("../pkg/rickandmorty");

const getCharacter = async (req, res) => {
    try{
        const data = await getCharacterName(req.query.name);
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



module.exports = {
    getCharacter,
    getCharacterByLocation,
}