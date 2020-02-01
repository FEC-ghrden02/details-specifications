import React from 'react';

const EntretainmentListItem = (props) => {
  console.log('@ELI props = ', typeof props.value)
  // do not render empty properties
  if (props.value.length !== 0) {
    // if array return array elements in separate list.
    // if (Array.isArray(props.value)){
    // }
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

export default EntretainmentListItem;