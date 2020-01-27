var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var ConvenienceFeatSchema = new Schema ({
    tilt_steering_wheel: Boolean,
    telescoping_steering_wheel: Boolean,
    ac: Boolean,
    garage_dr_transmiter: Boolean,
    front_beverage_holder: Boolean,
    spd_control: Boolean,
    illuminated_entry: Boolean,
    rear_bev_holder: Boolean,
    trunk_auto_latch: Boolean,
    pwr_wnds: Boolean,
    one_tocuh_down_wnds: Boolean,
    emergency_comm_sys: Boolean,
    remote_keyless_entry: Boolean,
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.export = mongoose.model('ConvenienceFeature', ConvenienceFeatSchema);