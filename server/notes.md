 
 # *Thoughts And Notes To Review*
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

## *I THINK THAT THE LESS DATA MANIPULATION THE BETTER*

### Alternatives to remove empty properties:

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

Option#3 - *TOO COMPLICATED* ~~Create default value for empty properties of undefined.~~

### How to convert property value of typeof array into obj literals

### How can I hide unnecesary data from user?

Option#1 - Don't retrieve them through query. *SOUNDS BEST*

Option#2 - At the List component of the table setting value of them to empty string and then use Option#2 of removing empty properties

### How to deal with vehicle who doesn't have collection?

Through controller? Or at App? Or Component?