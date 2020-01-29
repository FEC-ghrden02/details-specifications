// dependencies
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Vehicle = require('./vehicle');
const ConvenienceFeature = require('./convenience');
const EntmtFeat = require('./entretainment');
const OffRoadCapability = require('./offRoad');
const SeatTrim = require('./seatTrim');
const SpecsDimen = require('./specsDimen');

// db connection
mongoose.connect('mongodb://localhost:27017/echoPark', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// initial seed of vehicle collection and start of promise chain
// vehicle collection and document established first since other documents require vehicle _id
Vehicle.createCollection().then(function(collection){
    console.log('Vehicle collection created');

    const vehicleExample = new Vehicle ({
        year: 2016,
        make: 'Ford',
        model: 'Focus',
        Category: 'Sedan'
    });

    // vehicle document creation
    Vehicle.create(vehicleExample).then(function(vehicle){
        console.log(`The new ${vehicle.year} ${vehicle.make} ${vehicleExample.model} ${vehicle.Category} has been added!`);

        // start of other creation of other collections & documents
        ConvenienceFeature.createCollection().then(function(collection){
            console.log('Convenience collection created');
        
            const convenienceExample = new ConvenienceFeature ({
                tilt_steering_wheel: 'Tilt steering wheel',
                telescoping_steering_wheel: 'Telescoping steering wheel',
                ac: 'Air conditioning',
                garage_dr_transmiter: '',
                front_beverage_holder: 'Front beverage holders',
                spd_control: 'Speed control',
                illuminated_entry: 'Illuminated entry',
                rear_bev_holder: 'Rear beverage holders',
                trunk_auto_latch: '',
                pwr_wnds: 'Power windows',
                one_tocuh_down_wnds: '1-touch down',
                emergency_comm_sys: 'Emergency communication system',
                remote_keyless_entry: 'Remote keyless entry',
                vehicle: vehicleExample._id
            })
        
            ConvenienceFeature.create(convenienceExample).then(function(convenience){
                console.log(`Convenience Feature for vehicle #${convenience.vehicle} saved!`);
            });
        });

        EntmtFeat.createCollection().then(function(collection){
            console.log('EntmtFeat collection created');
        
            const EntmtFeatExample = new EntmtFeat ({
                smrt_device_integration: ['AppLink', 'Radio data system'],
                wireless_phone_connect: '',
                am_fm: 'SiriusXM',
                primary_lcd_size: '',
                first_row_lcd: '',
                snd_row_lcd: '',
                other:['Steering wheel mounted audio controls', 'CD-MP3 decoder', 'CD player'],
                vehicle: vehicleExample._id
            })
        
            EntmtFeat.create(EntmtFeatExample).then(function(EntmtFeat){
                console.log(`EntmtFeat for vehicle #${EntmtFeat.vehicle} saved!`);
            });
        });
        
        SeatTrim.createCollection().then(function(collection){
            console.log('SeatTrim collection created');
        
            const SeatTrimExample = new SeatTrim ({
                heated_seats: 'Heated front seats',
                pwr_seats: '',
                frnt_seats: 'bucket',
                rear_seats: 'bench',
                third_row_seats: '',
                max_seating_capacity: 5,
                other: ['Leather steering wheel', 'Front center armrest', 'Split folding rear seat'],
                vehicle: vehicleExample._id
            })
        
            SeatTrim.create(SeatTrimExample).then(function(SeatTrim){
                console.log(`SeatTrim for vehicle #${SeatTrim.vehicle} saved!`);
            });
        });
        
        SpecsDimen.createCollection().then(function(collection){
            console.log('SpecsDimen collection created');
        
            const SpecsDimenExample = new SpecsDimen ({
                front_legroom: '973mm (38.3\")',
                rear_legroom: '843mm (33.2\")',
                third_row_headroom: '',
                compression_ratio: '',
                eng_horse_pwr: '',
                ext_h: '1,466mm (57.7\")',
                ext_l: '4,534mm (178.5\")',
                vehicle: vehicleExample._id
            })
        
            SpecsDimen.create(SpecsDimenExample).then(function(SpecsDimen){
                console.log(`The SpeccsDimen for vehicle #${SpecsDimen.vehicle} saved!`);
            });
            
        });
        
    });
});

