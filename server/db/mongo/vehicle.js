var mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var VehicleSchema = new Schema ({
    year: Number,
    make: String,
    model: String,
    Category: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
