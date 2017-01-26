import React from 'react';
import './Bar.css';

function Bar(props) {
    let len = props.count / props.max * 100;
    let unit = '%';
    if (len === 0) {
        len = 1;
        unit = 'px';
    }
    const style = {
     width: `${len}${unit}`
    };
    return <div className="bar" style={style}></div>;
}

export default Bar;
