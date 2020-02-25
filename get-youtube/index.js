const axios = require('axios');
exports.handler = async(event) => {
    // TODO implementevent["queryStringParameters"]['queryparam1']
    const data = await axios({
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/search`,
            params: {
                part: "snippet",
                q:"techtips",
                maxResults:5,
                key:process.env.KEY
            }
        })
        .then(function(res) {
            console.log(res);
            return res.data;
        });
    const response = {
        statusCode: 200,
        body: data,
    };
    return response;
};
