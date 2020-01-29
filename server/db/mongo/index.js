const mongoose = require('mongoose');

// database connection port
mongoose.connect('mongodb://localhost:27017/echoPark', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we\'re connected!');
});