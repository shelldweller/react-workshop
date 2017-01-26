import React from 'react';
import './Person.css';

function Person(props) {
    let callback = props.personCallback.bind(null, props.person)
    return (
        <h3 className="person" onClick={callback}>
            {props.person.name}
            {' '}
            <small>{props.person.skills.join(' ')}</small>
        </h3>
    );
}

export default Person;
