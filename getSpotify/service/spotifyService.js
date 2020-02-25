const axios = require('axios');

const getPodcasts = (queryString, token) => {
  return axios
    .get(`https://api.spotify.com/v1/search?q=${queryString}&type=playlist`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data);
};

module.exports = { getPodcasts };
