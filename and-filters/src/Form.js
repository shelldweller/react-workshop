import React, { Component } from 'react';
import './Form.css';
// imp  ort clone from 'lodash/clone';

class Form extends Component {

    constructor(props) {
        super(props);
        this.resetState();
        this.onNameChanged = this.onFieldChanged.bind(this, 'name');
        this.onSkillsChanged = this.onFieldChanged.bind(this, 'skills');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.state = {
            name: '',
            skills: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.person) {
            this.setState({
                name: nextProps.person.name,
                skills: nextProps.person.skills.join(' ')
            });
        }
    }

    onFieldChanged(fieldName, event) {
        let nextState = {};
        nextState[fieldName] = event.target.value;
        this.setState(nextState);
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.name && this.state.skills) {
            this.props.addPerson({
                name: this.state.name,
                skills: this.state.skills.split(/\W+/)
            });
            this.resetState();
        } else {
            alert('Both name and skills are required')
        }
        // alert(`name: ${this.state.name}\nskills: ${this.state.skills}`);
    }

    render() {
        return (
            <div id="Form" className="padded full-width" onSubmit={this.handleSubmit}>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.onNameChanged} />
                    </div>
                    {' '}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Skills" value={this.state.skills} onChange={this.onSkillsChanged} />
                    </div>
                    {' '}
                    <button type="submit" className="btn btn-primary">Create user</button>
                </form>
            </div>
        )
    }
}

export default Form;
