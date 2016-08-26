var twitter = require("ntwitter");
module.exports = new twitter({
  consumer_key: process.env.YOUR_CONSUMER_KEY,
  consumer_secret: process.env.YOUR_CONSUMER_SECRET,
  access_token_key: process.env.USER_ACCESS_TOKEN,
  access_token_secret: process.env.USER_ACCESS_TOKEN_SECRET
});
