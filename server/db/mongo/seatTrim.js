var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var SeatTrimSchema = new Schema ({
    heated_seats: String,
    pwr_seats: String,
    third_row_seats: Boolean,
    other: [String],
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.export = mongoose.model('SeatTrim', SeatTrimSchema);

