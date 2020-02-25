const axios = require('axios');
const oauth = require('axios-oauth-client');

const getClientCredentials = oauth.client(axios.create(), {
  url: 'https://accounts.spotify.com/api/token',
  grant_type: 'client_credentials',
  client_id: process.env.ID,
  client_secret: process.env.SECRET,
  scope: 'playlist-read-private' //NEEDS TO BE A VARIABLE IN THE FUTURE
});

module.exports = { getClientCredentials };
