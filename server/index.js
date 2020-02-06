require('dotenv').config();
const express = require ('express');
const app = express();
// const db = require('./db/orm/index'); // ORM DB
const db = require('./db/mongo/index'); // NON-ORM DB
const Vehicle = require('./db/mongo/vehicle');
const ConvenienceFeature = require('./db/mongo/convenience');
const EntmtFeat = require('./db/mongo/entretainment');
const OffRoadCapability = require('./db/mongo/offRoad');
const SeatTrim = require('./db/mongo/seatTrim');
const SpecsDimen = require('./db/mongo/specsDimen');

// directory for static files
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

// route for GET /vehicles
app.get ( '/api/vehicles', function (req, res) {
    // query to retrieve all documents in the vehicle collection
    Vehicle.find( {_id: '5e37b14684b0978b90649150'}, function (err, docs){
        res.json(docs);
    });
});

app.get ( '/api/convenience-specs', function (req, res) {
    console.log('Request recieved from React')
    // FIX: query to remove empty fields
    ConvenienceFeature.find( {vehicle: '5e37b14684b0978b90649150'}, function (err, docs) {
        res.json(docs);
    });
});

app.get ( '/api/entretainment-specs', function (req, res) {
    EntmtFeat.find( {vehicle: '5e37b14684b0978b90649150'}, function (err, docs) {
        res.json(docs);
    })
});

app.get ( '/api/off-road-specs', function (req, res) {
    OffRoadCapability.find( {vehicle: '5e37b14684b0978b90649150'}, function (err, docs) {
        res.json(docs);
    })
});

app.get( '/api/seat-trim-specs', function (req, res) {
    SeatTrim.find( {vehicle: '5e37b14684b0978b90649150'}, function (err, docs) {
        res.json(docs);
    })
});

app.get ( '/api/specs-dimensions', function (req, res) {
    SpecsDimen.find( {vehicle: '5e37b14684b0978b90649150'}, function (err, docs) {
        res.json(docs);
    })
})

// connection to localhost
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))