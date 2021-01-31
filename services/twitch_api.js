require("dotenv").config();

const axios = require("axios");
const TWITCH_API_URL = "https://id.twitch.tv/oauth2";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

axios.defaults.baseURL = TWITCH_API_URL;

const params = new URLSearchParams();
params.append("client_id", CLIENT_ID);
params.append("client_secret", CLIENT_SECRET);
params.append("grant_type", "client_credentials");

const getAccessToken = () => {
  axios
    .post("token", params)
    .then(function (response) {
      process.env.TWITCH_TOKEN = response.data.access_token;
    })
    .catch(function (error) {
      console.err(error);
    });
};


exports.getAccessToken = getAccessToken;