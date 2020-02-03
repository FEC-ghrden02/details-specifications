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

    const vehicleExample1 = new Vehicle ({
        year: 2016,
        make: 'Ford',
        model: 'Focus',
        Category: 'Sedan'
    });
    const vehicleExample2 = new Vehicle ({
        year: 2017,
        make: 'Jeep',   
        model: 'Compass High Altitude',
        Category: 'SUV'
    });
    const vehicleExample3 = new Vehicle ({
        year: 2018,
        make: 'Dodge',
        model: 'Gran Caravan',
        Category: 'Van'
    });

    // vehicle document creation
    Vehicle.insertMany([
        vehicleExample1,
        vehicleExample2,
        vehicleExample3
    ]
    )
    .then(function(vehicle){
        console.log(`Vehicles have been added!`);

        // start of other creation of other collections & documents
        ConvenienceFeature.createCollection().then(function(collection){
            console.log('Convenience collection created');
        
            const convenienceExample1 = new ConvenienceFeature ({
                one_tocuh_down_wnds: '1-touch down',
                tilt_steering_wheel: 'Tilt steering wheel',
                telescoping_steering_wheel: 'Telescoping steering wheel',
                ac: 'Air conditioning',
                garage_dr_transmiter: '',
                front_beverage_holder: 'Front beverage holders',
                spd_control: 'Speed control',
                illuminated_entry: 'Illuminated entry',
                rear_bev_holder: 'Rear beverage holders',
                pwr_wnds: 'Power windows',
                trunk_auto_latch: '',
                emergency_comm_sys: 'Emergency communication system',
                remote_keyless_entry: 'Remote keyless entry',
                vehicle: vehicleExample1._id
            });
            const convenienceExample2 = new ConvenienceFeature ({
                one_tocuh_down_wnds: '1-touch down',
                tilt_steering_wheel: 'Tilt steering wheel',
                telescoping_steering_wheel: '',
                ac: 'Air conditioning',
                garage_dr_transmiter: '',
                front_beverage_holder: 'Front beverage holders',
                spd_control: 'Speed control',
                illuminated_entry: 'Illuminated entry',
                rear_bev_holder: 'Rear beverage holders',
                pwr_wnds: 'Power windows',
                trunk_auto_latch: '',
                emergency_comm_sys: '',
                remote_keyless_entry: 'Remote keyless entry',
                vehicle: vehicleExample2._id
            });
            const convenienceExample3 = new ConvenienceFeature ({
                one_tocuh_down_wnds: '1-touch down',
                tilt_steering_wheel: 'Tilt steering wheel',
                telescoping_steering_wheel: 'Telescoping steering wheel',
                ac: 'Front dual A/C',
                garage_dr_transmiter: '',
                front_beverage_holder: 'Front beverage holders',
                spd_control: 'Speed control',
                illuminated_entry: 'Illuminated entry',
                rear_bev_holder: 'Rear beverage holders',
                pwr_wnds: 'Power windows',
                trunk_auto_latch: 'Trunk/hatch auto-latch',
                emergency_comm_sys: '',
                remote_keyless_entry: '',
                vehicle: vehicleExample3._id
            });
        
            ConvenienceFeature.insertMany(
                [
                    convenienceExample1,
                    convenienceExample2,
                    convenienceExample3
                ]
            ).then(function(convenience){
                console.log(`Convenience Documents have been added!`);
            });
        });

        EntmtFeat.createCollection().then(function(collection){
            console.log('EntmtFeat collection created');
        
            const EntmtFeatExample1 = new EntmtFeat ({
                smrt_device_integration: ['Smart device integration:','AppLink', 'Radio data system'],
                wireless_phone_connect: '',
                am_fm: 'AM/FM radio: SiriusXM',
                primary_lcd_size: '',
                first_row_lcd: '',
                snd_row_lcd: '',
                other:['Steering wheel mounted audio controls', 'CD-MP3 decoder', 'CD player'],
                vehicle: vehicleExample1._id
            });
            const EntmtFeatExample2 = new EntmtFeat ({
                smrt_device_integration: ['Smart device integration:', 'AppLink', 'Radio data system'],
                wireless_phone_connect: 'Wireless Phone connectivity: Uconnect w/Bluetooth',
                am_fm: 'AM/FM radio: SiriusXM',
                primary_lcd_size: 'Primary LCD size: 6.5\"',
                first_row_lcd: '1st row LCD monitors: 1',
                snd_row_lcd: '',
                other:['Radio data system', 'DVD-Audio', 'Steering wheel mounted audio controls', 'CD-MP3 decoder', 'Internal memory capacity (GB): 28 GB', 'CD player'],
                vehicle: vehicleExample2._id
            });
            const EntmtFeatExample3 = new EntmtFeat ({
                smrt_device_integration: ['Smart device integration:', 'AppLink', 'Radio data system'],
                wireless_phone_connect: 'Wireless phone connectivity: Uconnect w/Bluetooth',
                am_fm: 'AM/FM radio: SiriusXM',
                primary_lcd_size: 'Primary LCD size: 6.5\"',
                first_row_lcd: '1st row LCD monitors: 1',
                snd_row_lcd: '',
                other:['Steering wheel mounted audio controls', 'CD-MP3 decoder', 'Internal memory capacity (GB): 28 GB', 'CD player'],
                vehicle: vehicleExample3._id
            });
        
            EntmtFeat.insertMany(
                [
                    EntmtFeatExample1,
                    EntmtFeatExample2,
                    EntmtFeatExample3
                ]
            )
            .then(function(EntmtFeat){
                console.log(`EntmtFeat documents have been added!`);
            });
        });
        
        SeatTrim.createCollection().then(function(collection){
            console.log('SeatTrim collection created');
        
            const SeatTrimExample1 = new SeatTrim ({
                heated_seats: 'Heated front seats',
                pwr_seats: '',
                max_seating_capacity: 'Max seating capacity: 5',
                frnt_seats: 'Front seats: bucket',
                rear_seats: 'Rear seats: bench',
                third_row_seats: '',
                other: ['Leather steering wheel', 'Front center armrest', 'Split folding rear seat'],
                vehicle: vehicleExample1._id
            });
            const SeatTrimExample2 = new SeatTrim ({
                heated_seats: 'Heated front seats',
                pwr_seats: 'Power driver seat',
                frnt_seats: 'Front seats: bucket',
                rear_seats: 'Rear seats: bench',
                third_row_seats: '',
                max_seating_capacity: 'Max seating capacity: 5',
                other: ['Leather upholstery', 'Front center armrest', 'Manual driver lumbar support', 'Split folding rear seat'],
                vehicle: vehicleExample2._id
            });
            const SeatTrimExample3 = new SeatTrim ({
                heated_seats: 'Heated front seats',
                pwr_seats: 'Power driver seat',
                frnt_seats: 'Front seats: bucket',
                rear_seats: 'Rear seats: captain',
                third_row_seats: '3rd row seats: split-bench',
                max_seating_capacity: 'Max seating capacity: 7',
                other: ['Leather shift knob', 'Passenger seat mounted armrest', 'Split folding rear seat', 'Reclining 3rd row seat'],
                vehicle: vehicleExample3._id
            });
        
            SeatTrim.insertMany(
                [
                    SeatTrimExample1,
                    SeatTrimExample2,
                    SeatTrimExample3
                ]
            )
            .then(function(SeatTrim){
                console.log(`SeatTrim documents have been added!`);
            });
        });

        OffRoadCapability.createCollection().then(function(collection){
            console.log('OffRoadCapability collection created');
        
            const OffRoadCapabilityExample1 = new OffRoadCapability ({
                ground_clearance: 'Ground clearance (min): 142mm (5.6\")',
                approach_angle: 'Approach angle: 13 deg',
                departure_angle: 'Departure angle: 18 deg',
                ramp_breakover_angle: 'Ramp breakover angle: 14 deg',
                vehicle: vehicleExample3._id
            });

            OffRoadCapability.create(OffRoadCapabilityExample1).then(function(offRoad){
                console.log(`A new OffRoad Document has been added!`);
            });
        });
        
        SpecsDimen.createCollection().then(function(collection){
            console.log('SpecsDimen collection created');
        
            const SpecsDimenExample1 = new SpecsDimen ({
                front_legroom: 'Front headroom: 973mm (38.3\")',
                rear_legroom: 'Rear legroom: 843mm (33.2\")',
                third_row_headroom: '',
                compression_ratio: '',
                eng_horse_pwr: '',
                ext_h: 'Exterior height: 1,466mm (57.7\")',
                ext_l: 'Exterior length: 4,534mm (178.5\")',
                vehicle: vehicleExample1._id
            });
            const SpecsDimenExample2 = new SpecsDimen ({
                front_legroom: 'Front legroom: 1,031mm (40.6\")',
                rear_legroom: 'Rear legroom: 1,001mm (39.4\")',
                third_row_headroom: '',
                compression_ratio: 'Compression ratio: 10.50 to 1',
                eng_horse_pwr: 'Engine horsepower: 172hp @ 6,000RPM',
                ext_h: 'Exterior Height: 1,651mm (65.0\")',
                ext_l: 'Exterior Length:  4,448mm (175.1\")',
                vehicle: vehicleExample2._id
            });
            const SpecsDimenExample3 = new SpecsDimen ({
                front_legroom: '1,034mm (40.7\")',
                rear_legroom: '927mm (36.5\")',
                third_row_headroom: '963mm (37.9\")',
                compression_ratio: '10.20 to 1',
                eng_horse_pwr: '',
                ext_h: 'Exterior height: 1,725mm (67.9\")',
                ext_l: 'Exterior length: 5,151mm (202.8\")',
                vehicle: vehicleExample3._id
            });
        
            SpecsDimen.insertMany(
                [
                    SpecsDimenExample1,
                    SpecsDimenExample2,
                    SpecsDimenExample3
                ]
            ).then(function(SpecsDimen){
                console.log(`The SpeccsDimen documents have been added!`);
            });
            
        });
        
    });
});

