const router = require("express").Router();
const { getPokemonById, processPokemon } = require("../controllers/pokemon");

router.get("/id/:id", getPokemonById);
router.get("/process", processPokemon);

module.exports = router;
