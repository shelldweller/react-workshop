import React from 'react';

function Button(props) {
    function callback() {
        props.callback(props.name);
    }
    return (
        <button className="btn btn-default" onClick={callback}>{props.label}</button>
    )
}

export default Button;
