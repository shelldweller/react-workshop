import React from 'react';
import Person from './Person';
import './Team.css';

function Team(props) {
    let people = props.people.length ?
        props.people.map((person) => <Person key={person.name} person={person} personCallback={props.personCallback} />) :
        'No people matched';
    return (
        <div id="Team" className="padded full-height">
            {people}
        </div>
    )
}


export default Team;
