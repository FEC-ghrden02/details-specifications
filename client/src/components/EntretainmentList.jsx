import React from 'react';
import EntretainmentListItem from './EntretainmentListItem.jsx';

const EntretainmentList = (props) => {
    console.log('This', props.entretainmentDetails)

    const tempArray = [];
    for(var keys in props.entretainmentDetails){
        if(Array.isArray(props.entretainmentDetails[keys])){
            for(var i = 0; i < props.entretainmentDetails[keys].length; i++) {
                var tempObj = {};
                tempObj.key = keys+i;
                tempObj.value = props.entretainmentDetails[keys][i];
                tempArray.push(tempObj);
            }
        }
    }
    // create an array of objs from props.entretainmentDetails
    const reformattedProps = Object.keys(props.entretainmentDetails).map(key => {
        // console.log(`This are the key`,key, `for value `, props.entretainmentDetails[key]);
        let rObj = {};
        // pass the key of the property as an index of the component
        rObj.key = key;
        rObj.value = props.entretainmentDetails[key];
        // set value to empty string to be rmvd from displaying in component
        if (rObj.key === '_id' || rObj.key === 'vehicle' || rObj.key === '__v') {
            rObj.value = '';
        }
        if (Array.isArray(rObj.value)){
            rObj.value = '';
          }
        // destructurize array to obj
        /* NEED TO FIX
        if (Array.isArray(props.entretainmentDetails[key])){
            let array1 = props.entretainmentDetails[key];
            console.log(`Current array ${array1}`);
            array1.map((element, index) => {
                rObj.key = index;
                rObj.value = element;
                console.log('Inside of arra1 obj', rObj)
                return rObj;
            })
        }
        */
        console.log(`Returning list of rObj. `, rObj);
        return rObj;
    });

    var reformattedPropsV2 = reformattedProps.concat(tempArray);

    // mapping through list of obj to create components as needed
    const entretainmentListComponents = reformattedPropsV2.map((item) => {
        return (
            <EntretainmentListItem
                key={item.key}
                value={item.value}
            />
        )
    })

    return(
        <div className="entretainment-features">
            <h4>Entretainment Features</h4>
            <ul className="details list-unstyled">
                {entretainmentListComponents}
            </ul>
        </div>
    )
}

export default EntretainmentList;