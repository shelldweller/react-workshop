import React, { Component } from 'react';
import countBy from 'lodash/countBy';
import flatMap from 'lodash/flatMap';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';

import './App.css';

import Form from './Form';
import Skills from './Skills';
import Team from './Team';

import DataStorage from './lib/Storage';

const identity = (x) => x;

class App extends Component {

  constructor() {
    super();

    this.storage = new DataStorage();
    this.people = this.storage.get('people') || {};
    this.filters = new Map();

    this.state = {
      people: this.getPeople(),
      skills: this.getSkills(),
      activePerson: null
    };
    this.skills = []; // todo
    this.addPerson = this.addPerson.bind(this);
    this.onFilterClicked = this.onFilterClicked.bind(this);
    this.editPerson = this.editPerson.bind(this);
  }

  addPerson(item) {
    this.people[item.name] = item.skills;
    this.storage.set('people', this.people);
    this.setState({
      people: this.getPeople(),
      skills: this.getSkills(),
      activePerson: null
    });
  }

  editPerson(person) {
    this.setState({activePerson: person});
  }
  
  onFilterClicked(language) {
    if (this.filters.has(language)) {
      this.filters.delete(language);
    } else {
      this.filters.set(language, 1);
    }
    this.setState({
      people: this.getPeople()
    });

  }

  getSkills() {
    let skills = toPairs(
      countBy(
        flatMap(values(this.people)), identity
      )
    );
    return sortBy(skills, (x) => x[0]);
  }

  getPeople() {
    let people = toPairs(this.people);
    for(let skill of this.filters.keys()) {
      people = filter(people, (x) => x[1].indexOf(skill) !== -1);
    }
    return sortBy(
      people.map(x => { return {name: x[0], skills: x[1]} }),
      x => x.name
    );
  }

  render() {
    return (
      <div className="full-height full-width">
        <Skills skills={this.state.skills} toggleFilter={this.onFilterClicked} />
        <Team people={this.state.people} personCallback={this.editPerson} />
        <Form addPerson={this.addPerson} person={this.state.activePerson} />
      </div>
    );
  }
}

export default App;
