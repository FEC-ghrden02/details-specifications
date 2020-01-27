var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var OffRoadCapabilitySchema = new Schema({
    ground_clearance: String,
    approach_angle: String,
    departure_angle: String,
    ramp_breakover_angle: String,
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
})

module.export = mongoose.model('OffRoadCapability', OffRoadCapabilitySchema);