import React from 'react';
import ConvenienceListItem from './ConvenienceListItem.jsx';

const ConvenienceList = (props) => {
    console.log('@ convenience: ', props.convenienceDetails);
    
    // from props.convenienceDetails create an array of objs
    const reformattedProps = Object.keys(props.convenienceDetails).map(key => {
        console.log(`This are the key`,key, props.convenienceDetails[key]);
        let rObj = {};
        // to give every obj an id=index
        rObj.key = key;
        rObj.value = props.convenienceDetails[key];
        return rObj;
    });
    
    // mapping through list of obj to create components as needed
    const convenienceListComponents = reformattedProps.map((item) => {
        return (
            <ConvenienceListItem
                key={item.key} 
                value={item.value}
            />
        )
    })
    
    return (
        <div className="convenience-features">
            <h4>Convenience Features</h4>
            <ul className="details list-unstyled">
              {convenienceListComponents}
            </ul>
        </div>
    );
}
/*   <ConvenienceListItem
key={props.convenienceDetails._id}
tilt_steering_wheel={props.convenienceDetails.tilt_steering_wheel}                   
/>*/
export default ConvenienceList;