import React from 'react';

const ConvenienceListItem = (props) => {
    // prevent rendering empty elements
    if (props.value.length !== 0 ){
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
};

export default ConvenienceListItem;