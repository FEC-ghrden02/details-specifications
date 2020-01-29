require('dotenv').config();
const express = require ('express');
const app = express();
// const db = require('./db/orm/index'); // ORM DB
const db = require('./db/mongo/index'); // NON-ORM DB
const Vehicle = require('./db/mongo/vehicle');

// directory for static files
app.use(express.static(__dirname + '/../client/dist'));

// route for GET /vehicles
app.get('/api/vehicles', function (req, res){
    // query to retrieve all documents in the vehicle collection
    Vehicle.find({}, function(err, docs){
        res.json(docs);
    });
});

app.get('/detailed-specs', function (req, res){
})

// connection to localhost
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))