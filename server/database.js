const mongoose = require('mongoose');

const URI = 'mongodb://tracker:Hello124@ds155293.mlab.com:55293/quotes-task';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
