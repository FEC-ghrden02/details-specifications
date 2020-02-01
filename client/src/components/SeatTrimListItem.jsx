import React from 'react';

const SeatTrimListItem = (props) => {
  console.log('@ STLI props = ', props)
  // do not render empty properties
  if ( props.value.length !== 0 ){

    return (
      <li>
        <span className="title">
          {props.value}
        </span>
      </li>
    )
  } else {
    return null;
  }
}

export default SeatTrimListItem;