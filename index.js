const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const socialMediaRoutes = require("./controllers/socialMedia");
const pokemonRoutes = require("./routes/pokemon");

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/socialMedia", socialMediaRoutes);
app.use("/pokemon", pokemonRoutes);

//Connect to DB
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`));
