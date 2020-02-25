const service = require('./service/spotifyService.js');
const oauth = require('./oauth/oauth');

exports.handler = async event => {
  console.log(event);

  const podcasts = await oauth
    .getClientCredentials()
    .then(res => service.getPodcasts('podcast', res.access_token));

  const response = {
    statusCode: 200,
    body: podcasts
  };
  return response;
};
