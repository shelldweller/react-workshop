import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({name: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.name) {
            this.props.addItem(this.state.name);
            this.setState({name: ''});
        }
    }

    render() {
        return (
            <div id="Form" className="container" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <input onChange={this.onChange} type="text" value={this.state.name} className="form-control" placeholder="Enter new item name" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
