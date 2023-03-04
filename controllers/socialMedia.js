const router = require("express").Router();
const SocialMedia = require("../models/socialMedia");

router.get("/", async (req, res) => {
  try {
    const socialMedia = await SocialMedia.find();
    res.json(socialMedia);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error retrieving resource" });
  }
});

router.post("/", async (req, res) => {
  try {
    const SocialMedia = await new SocialMedia(req.body).save();
    res.json(SocialMedia);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error creating resource" });
  }
});

module.exports = router;
