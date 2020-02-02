import React from 'react';
import ConvenienceListItem from './ConvenienceListItem.jsx';

const ConvenienceList = (props) => {
    
    // from props.convenienceDetails create an array of objs
    const reformattedProps = Object.keys(props.convenienceDetails).map(key => {
        let rObj = {};
        // to give every obj an id=index
        rObj.key = key;
        rObj.value = props.convenienceDetails[key];
        // set value to empty string to be removed of displaying in ConvenienceListItem
        if(rObj.key === '_id' || rObj.key === 'vehicle' || rObj.key === '__v') {
            rObj.value = '';
        }
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

export default ConvenienceList;