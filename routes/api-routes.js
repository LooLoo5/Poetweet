const Twit = require('twit');
const syllable = require('syllable');
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
            const tweets = await db.Tweets.findAll({});
            response.json(tweets);
        } catch (error) {
            response.sendStatus(500);
        }
    });
    // sends post request to mysql
    app.post('/api/post', async (request, response) => {
        console.log(request.body.title);
        console.log(request.body.body);
        try {
            const str = request.body.body;
            const cleanStr = str.replace(/[^\w\s]/gi, '');
            console.log(cleanStr);
            const cleanArr = cleanStr.split(' ');
            const lineOne = [];
            const lineTwo = [];
            const lineThree = [];
            const arrObj = [];
            // let deletedIndx = [];
            let lineOneSum = 1;
            let lineTwoSum = 1;
            let lineThreeSum = 1;
            cleanArr.forEach((tWord) => {
                const obj = {
                    word: tWord,
                    sylCount: syllable(tWord),
                };
                arrObj.push(obj);
            });
            // if (arrObj[0].word === 'RT') {
            //     deletedIndx = arrObj.splice(0, 2);
            // }
            // console.log(deletedIndx);
            console.log(arrObj);
            arrObj.forEach((ele) => {
                if (lineOneSum < 6) {
                    lineOneSum += ele.sylCount;
                    if (lineOneSum < 8) {
                        lineOne.push(ele.word);
                    }
                } else if (lineTwoSum < 8) {
                    lineTwoSum += ele.sylCount;
                    if (lineTwoSum < 10) {
                        lineTwo.push(ele.word);
                    }
                } else if (lineThreeSum < 6) {
                    lineThreeSum += ele.sylCount;
                    if (lineThreeSum < 8) {
                        lineThree.push(ele.word);
                    }
                }
            });
            console.log(`The lineOneSum is ${lineOneSum}`);
            console.log(lineOne.join(' '));
            console.log(`The lineTwoSum is ${lineTwoSum}`);
            console.log(lineTwo.join(' '));
            console.log(`The lineThreeSum is ${lineThreeSum}`);
            console.log(lineThree.join(' '));
            // stores newpoem to mysql database
            const storedPoem = {
                title: request.body.title,
                lineOne: lineOne.join(' '),
                lineTwo: lineTwo.join(' '),
                lineThree: lineThree.join(' '),
            };
            const newPost = db.Poems.create(storedPoem);
            response.json(newPost);
            // stores newpoem to mysql database
            // const newPost = await db.Poems.create(request.body);
            // response.json(newPost);
        } catch (error) {
            response.sendStatus(500);
        }
    });

    // sends post request to mysql
    app.post('/api/tweet', (request, response) => {
        console.log(request.body.keyword);
        try {
            // twitter API call
            const tweetQuery = `${request.body.keyword}`;
            T.get('search/tweets', {
                q: `${tweetQuery} since:2017-07-14`,
                count: 5,
                lang: 'en',
                retweeted: false,
                retweet_count: 0,
            }, (err, data) => {
                const str = data.statuses[0].text;
                const cleanStr = str.replace(/[^\w\s]/gi, '');
                console.log(cleanStr);
                const cleanArr = cleanStr.split(' ');
                const lineOne = [];
                const lineTwo = [];
                const lineThree = [];
                const arrObj = [];
                let deletedIndx = [];
                let lineOneSum = 1;
                let lineTwoSum = 1;
                let lineThreeSum = 1;
                cleanArr.forEach((tWord) => {
                    const obj = {
                        word: tWord,
                        sylCount: syllable(tWord),
                    };
                    arrObj.push(obj);
                });
                if (arrObj[0].word === 'RT') {
                    deletedIndx = arrObj.splice(0, 2);
                }
                console.log(deletedIndx);
                console.log(arrObj);
                arrObj.forEach((ele) => {
                    if (lineOneSum < 6) {
                        lineOneSum += ele.sylCount;
                        if (lineOneSum < 8) {
                            lineOne.push(ele.word);
                        }
                    } else if (lineTwoSum < 8) {
                        lineTwoSum += ele.sylCount;
                        if (lineTwoSum < 10) {
                            lineTwo.push(ele.word);
                        }
                    } else if (lineThreeSum < 6) {
                        lineThreeSum += ele.sylCount;
                        if (lineThreeSum < 8) {
                            lineThree.push(ele.word);
                        }
                    }
                });
                console.log(`The lineOneSum is ${lineOneSum}`);
                console.log(lineOne.join(' '));
                console.log(`The lineTwoSum is ${lineTwoSum}`);
                console.log(lineTwo.join(' '));
                console.log(`The lineThreeSum is ${lineThreeSum}`);
                console.log(lineThree.join(' '));
                // stores newpoem to mysql database
                const storedPoem = {
                    lineOne: lineOne.join(' '),
                    lineTwo: lineTwo.join(' '),
                    lineThree: lineThree.join(' '),
                };
                const newPost = db.Tweets.create(storedPoem);
                response.json(newPost);
            });
        } catch (error) {
            response.sendStatus(500);
        }
    });
};
