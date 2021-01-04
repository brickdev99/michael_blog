const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/brick_education_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            },
        );
        console.log('Connect successful!');
    } catch (error) {
        console.log('Failed!');
    }
}

module.exports = { connect };
