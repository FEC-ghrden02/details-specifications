import React from 'react';

const OffRoadListItem = (props) => {

  // do not render empty properties
  if ( props.value.length !== 0 ){
    return (
      <li>
        <span className="title">
          {props.value}
        </span>
      </li>
    )
  }

}

export default OffRoadListItem;