const Twit = require('twit');
const db = require('./../models');

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});

module.exports = (app) => {
    // home page
    app.get('/', (request, response) => {
        response.send('You are home!');
    });
    // displays all data within mysql
    app.get('/api/post', async (request, response) => {
        console.log('Render poems database');
        try {
            const posts = await db.Poems.findAll({});
            response.json(posts);
        } catch (error) {
            response.sendStatus(500);
        }
    });
    app.get('/api/tweet', async (request, response) => {
        console.log('Render Tweet database');
        try {
            const posts = await db.Tweet.findAll({});
            response.json(posts);
        } catch (error) {
            response.sendStatus(500);
        }
    });
    // sends post request to mysql
    app.post('/api/post', async (request, response) => {
        console.log(request.body.title);
        console.log(request.body.body);
        try {
            // stores newpoem to mysql database
            const newPost = await db.Poems.create(request.body);
            response.json(newPost);
        } catch (error) {
            response.sendStatus(500);
        }
    });

    // sends post request to mysql
    app.post('/api/tweet', (request, response) => {
        console.log(request.body.keyword);
        // console.log(request.body.body);
        try {
            // twitter API call
            const tweetQuery = `${request.body.keyword}`;
            T.get('search/tweets', {
                q: `${tweetQuery} since:2017-07-14`,
                count: 5,
                lang: 'en',
            }, (err, data) => {
                // console.log(data.statuses);
                console.log(data.statuses[0].text);
                const str = data.statuses[0].text;
                function parseTweet() {
                    const clean = str.split(' ');
                    console.log(clean);
                }
                parseTweet();
                // const tweetOne = {
                //     keyword: data.statuses[0].text,
                // };
                // const tweetData = db.Tweet.create(tweetOne);
                // response.json(tweetData);
            });
            // console.log(data.statuses[1].text);
            // console.log(data.statuses[2].text);
            // console.log(data.statuses[3].text);
            // console.log(data.statuses[4].text);
            // stores newpoem to mysql database
            // const newPost = await db.Poems.create(request.body);
            // response.json(newPost);
        } catch (error) {
            response.sendStatus(500);
        }
    });
};
