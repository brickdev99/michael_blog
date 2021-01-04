const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

// Action --> Dispatcher --> Function Handler

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
