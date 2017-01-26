import React, {Component} from 'react';

class Skill extends Component {
    constructor() {
        super();
        this.classes = ['default', 'info'];
        this.i = 0;
        this.state = {
            style: this.classes[this.i]
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.i = (this.i + 1) % 2;
        this.setState({style: this.classes[this.i]});
        this.props.toggleFilter(this.props.skill);
    }

    render() {
        const style = `btn btn-${this.state.style}`;
        return (
            <div>
                <button className={style} type="button" onClick={this.onClick}>
                    {this.props.skill} <span className="badge">{this.props.count}</span>
                </button>
            </div>
        );
    }
}

export default Skill;
