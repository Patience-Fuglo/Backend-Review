const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  pokemonId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
});
module.exports = mongoose.model("Pokemon", pokemonSchema);
