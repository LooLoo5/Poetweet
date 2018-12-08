const db = require('./../models');

module.exports = function (app) {
    app.get('/', (request, response) => {
        response.send('Hello World!');
    });
    app.get('/api/test', (request, response) => {
        response.send('This is just a test');
    });
    app.get('/api/post', async (request, response) => {
        console.log('LETS GET SOME POSTS');
        try {
            const posts = await db.Poems.findAll({});
            response.json(posts);
        } catch (error) {
            response.sendStatus(500);
        }
    });
    app.post('/api/post', async (request, response) => {
        console.log(request.body);
        try {
            const newPost = await db.Poems.create(request.body);
            response.json(newPost);
        } catch (error) {
            response.sendStatus(500);
        }
    });
};
