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
