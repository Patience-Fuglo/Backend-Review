const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialMediaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    min: 1,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "Facebook",
      "Twitter",
      "Instagram",
      "LinkedIn",
      "YouTube",
      "Pinterest",
      "Snapchat",
      "TikTok",
      "Reddit",
      "Twitch",
      "Vimeo",
      "Vine",
      "WhatsApp",
      "WeChat",
      "Weibo",
      "VK",
      "Xing",
      "Yelp",
      "Yelp",
      "YouTube",
      "Zomato",
    ],
  },
});

module.exports = mongoose.model("SocialMedia", socialMediaSchema);
