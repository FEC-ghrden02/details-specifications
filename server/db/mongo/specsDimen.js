var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var SpecsDimenSchema = new Schema ({
    third_row_headroom: String,
    compression_ratio: String,
    eng_horse_pwr: String,
    rear_legroom: String,
    ext_h: String,
    ext_l: String,
    front_legroom: String,
    other: [String],
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.exports = mongoose.model('SpecsDimen', SpecsDimenSchema);