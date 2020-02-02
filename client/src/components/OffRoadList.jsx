import React from 'react';
import OffRoadListItem from './OffRoadListItem.jsx';

const OffRoadList = (props) => {
    // if there is no data for specific collection do not show
    if (props.offRoadDetails === undefined || props.offRoadDetails.length === 0) {
        return null;
    } else { //otherwise render data
        //from props.offRoadDetails create an array of obj literals
        const reformattedProps = Object.keys(props.offRoadDetails).map(key => {
            let rObj = {};

            rObj.key = key;
            rObj.value = props.offRoadDetails[key];

            // clear unnecesary data to hide from user
            // can I do it through query?
            if (rObj.key === '_id' || rObj.key === 'vehicle' || rObj.key === '__v') {
                rObj.value = '';
            }
            return rObj;
        });

        // mapping through list of obj to create components as needed
        const offRoadListComponents = reformattedProps.map((item) => {
            return (
                <OffRoadListItem
                    key={item.key}
                    value={item.value}
                />
            )
        })

        return (
            <div className="off-road-capability">
                <h4>Off Road Capability</h4>
                <ul className="details list-unstyled">
                    {offRoadListComponents}
                </ul>
            </div>
        )
    }

}

export default OffRoadList;