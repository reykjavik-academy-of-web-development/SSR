import React from 'react';

export default props => (
    <div>
        <h1>{props.data.eventDateName}</h1>
        <img src={props.data.imageSource}></img>
        <form method="post" action="/comment">
            <input type="hidden" name="token" value={props.token}></input>
            nafn: <input name="nafn" type="text"></input>
            email: <input name="email" type="email"></input>
            <textarea name="stuff" rows="4" cols="50"></textarea>
            <input type="submit" value="senda"></input>
        </form>
    </div>
)