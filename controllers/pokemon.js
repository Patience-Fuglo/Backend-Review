const axios = require("axios");
const Pokemon = require("../models/pokemon");

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const url = `${BASE_URL}/pokemon/${id}`;
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error retrieving resource" });
  }
};
const processPokemon = async (req, res) => {
  var startTime = performance.now();
  await Pokemon.deleteMany({});
  let url = `${BASE_URL}/pokemon`;
  const { data } = await axios.get(url);
  data.results.forEach(async (res) => {
    const { data } = await axios.get(res.url);
    const createdPokemon = await new Pokemon({
      pokemonId: data.id,
      name: data.name,
      image: data.sprites.front_default,
    }).save();
  });
  var endTime = performance.now();
  const completeTime = endTime - startTime;
  res.send(`complete in ${completeTime} ms`);

  res.send("complete");
};

module.exports = {
  getPokemonById,
  processPokemon,
};
