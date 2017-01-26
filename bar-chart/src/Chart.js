import React from 'react';
import Item from './Item';

function Chart(props) {
    return (
        <div>
            { props.items.map(x => <Item key={x.name} {...x} {...props} />  ) }
        </div>
    );
}

export default Chart;
