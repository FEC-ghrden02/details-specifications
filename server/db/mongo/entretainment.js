var mongoose = require('mogoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var EntmtFeatSchema = new Schema ({
    smrt_device_integration: String,
    wireless_phone_connect: String,
    am_fm: String,
    primary_lcd_size: String,
    first_row_lcd: Boolean,
    snd_row_lcd: Boolean,
    other:[String],
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
})

module.export = mongoose.model('EntmtFeat', EntmtFeatSchema);