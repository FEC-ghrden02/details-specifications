import React from 'react';
import SpecsDimenListItem from './SpecsDimenListItem.jsx';

const SpecsDimenList = (props) => {

  // create an array of objs to string from props.specsDimenDetails
  const reformattedProps = Object.keys(props.specsDimenDetails).map(key => {
    let rObj = {};

    rObj.key = key;
    rObj.value = props.specsDimenDetails[key];

    // remove unnecesary properties by setting an empty value
    if (rObj.key === '_id' || rObj.key === 'vehicle' || rObj.key === '__v') {
      rObj.value = '';
    }
    return rObj;
  });

  // mapping through list of obj to create components as needed
  const specsDimenComponents = reformattedProps.map((item) => {
    return (
      <SpecsDimenListItem
        key={item.key}
        value={item.value}
      />
    )
  })

  return (
    <div className="specs-and-dimensions">
      <h4>Specs and Dimensions</h4>
      <ul className="details list-unstlyled">
        {specsDimenComponents}
      </ul>
    </div>
  )
}

export default SpecsDimenList;