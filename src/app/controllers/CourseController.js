const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] /course/:slug
    show(req, res) {
        res.send('Course Details');
    }
}

module.exports = new CourseController();
