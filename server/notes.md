 - GENERAL DATABASE -
    + ID
    + Year
    + Make
    + Model
    + Category (5-Door, Coupe, CUV, Hatchback,Sedam SUV, Truck, Van/Minivan, Wagon)

Vehicle Categories have different features?

Convenience Features
Entertainment Features
Specs and Dimension
Body Exterior
Powertrain
Safety and Security
Suspension/Handling
Lighting, Visibility and Instrumentation


psql - create db | pgAdmin
<server_folder> - knex init 

Alternatives to remove empty properties:
Option#1 - Has a *SIDE EFFECT* and modifies the original object
```javascript
for (var keys in props.convenienceDetails){
    if (props.convenienceDetails[keys].length === 0) {
        delete props.convenienceDetails[keys];
    };
}
```

Option#2 - Creates new *ARRAY* with an object and it's properties
```javascript
let reformattedData = data.map(obj => {
    console.log('This is obj ', obj);
    let rObj = {};
    for(var keys in obj){
        if(obj[keys].length > 0) {
            rObj[keys] = obj[keys];
        }
    }
    return rObj;
})
console.log('This is reformatted ', reformattedData);
```

Option#3 -
### *TOO COMPLICATED*
Create default value for empty properties of undefined.