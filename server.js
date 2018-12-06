require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// const Twit = require('twit');
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/public')));
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

require('./routes/api-routes.js')(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});


// twitter bot

// const T = new Twit({
//     consumer_key: process.env.consumer_key,
//     consumer_secret: process.env.consumer_secret,
//     access_token: process.env.access_token,
//     access_token_secret: process.env.access_token_secret,
//     timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
//     strictSSL: true, // optional - requires SSL certificates to be valid.
// });

// T.get('search/tweets', { q: 'banana since:2017-07-11', count: 5 }, (err, data) => {
//     console.log(data.statuses[2].text);
// });
