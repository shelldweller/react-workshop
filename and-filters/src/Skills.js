import React from 'react';
import Skill from './Skill';
import './Skills.css';

function Skills(props) {
    return (
        <div id="Skills" className="padded full-height">
            {props.skills.map((x) => {
                return <Skill key={x[0]} skill={x[0]} count={x[1]} toggleFilter={props.toggleFilter} />
            })}
        </div>
    );
}

export default Skills;
