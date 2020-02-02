import React from 'react';
import SeatTrimListItem from './SeatTrimListItem.jsx';

const SeatTrimList = (props) => {

  // create an array of objs strings from props.seatTrimDetails
  const reformattedProps = Object.keys(props.seatTrimDetails).map(key => {
    let rObj = {};
    
    rObj.key = key;
    rObj.value = props.seatTrimDetails[key];

    // remove unnecesary properties by setting an empty value
    if (rObj.key === '_id' || rObj.key === 'vehicle' || rObj.key === '__v') {
      rObj.value = '';
    }
    return rObj;
  });

  // mapping through list of obj to create components as needed
  const seatTrimListComponents = reformattedProps.map((item) => {
    return (
      <SeatTrimListItem
        key={item.key}
        value={item.value}
      />
    )
  })

  return (
    <div className="seat-and-trim">
      <h4>Seat and Trim</h4>
      <ul className="details list-unstyled">
        {seatTrimListComponents}
      </ul>
    </div>
  )
}

export default SeatTrimList;