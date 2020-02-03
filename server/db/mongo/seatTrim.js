var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var SeatTrimSchema = new Schema ({
    heated_seats: String,
    pwr_seats: String,
    frnt_seats: String,
    rear_seats: String,
    third_row_seats: String,
    max_seating_capacity: String,
    other: [String],
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.exports = mongoose.model('SeatTrim', SeatTrimSchema);

