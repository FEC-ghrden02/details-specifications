var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var SpecsDimenSchema = new Schema ({
    front_legroom: String,
    rear_legroom: String,
    third_row_headroom: String,
    compression_ratio: String,
    eng_horse_pwr: String,
    ext_h: String,
    ext_l: String,
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.exports = mongoose.model('SpecsDimen', SpecsDimenSchema);