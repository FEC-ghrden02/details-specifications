import React from 'react';

const ConvenienceListItem = (props) => {
    console.log('Props @ CLI ', props);
    // console.log('Props.length @ CLI ', Object.keys(props).length);
    // console.log('Props[#] @ CLI ', props[1]);
    return (
        <li>
            <span className="title">
                {props.value}
            </span>
        </li>
    )
};

export default ConvenienceListItem;