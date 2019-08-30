import React from 'react';

export default props => (
    <div>
        <h1>{props.data.eventDateName}</h1>
        <img src={props.data.imageSource}></img>
    </div>
)