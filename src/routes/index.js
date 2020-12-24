const newsRouter = require('./news');
const siteRouter = require('./site');

// Action --> Dispatcher --> Function Handler

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
