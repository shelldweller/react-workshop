import React from 'react';
import Button from './Button';
import Bar from './Bar';

function Item(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Button callback={props.addOne} label="+" name={props.name} />
                    {' '}
                    <Button callback={props.subOne} label="-" name={props.name} />
                    {' '}
                    {props.name}
                    {' '}
                    ({props.count})
                </div>
                <div className="col-md-9">
                    <Bar max={props.max} count={props.count} />
                </div>
            </div>
        </div>
    );
}

export default Item;
