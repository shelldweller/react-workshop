import React, { Component } from 'react';
import Form from './Form';
import Chart from './Chart';

class App extends Component {
  constructor() {
    super();
    this.items = {};

    this.state = {
      items: []
    };

    this.addOne = this.addOne.bind(this);
    this.addItem = this.addItem.bind(this);
    this.subOne = this.subOne.bind(this);
  }

  getItems() {
    let items = [];
    let key;
    for (key in this.items) {
      if(this.items.hasOwnProperty(key)) {
        items.push({name: key, count: this.items[key]});
      }
    }
    return items;
  }

  getMax() {
    return Object.keys(this.items).reduce(
      (prev,key) => this.items[key] > prev ? this.items[key] : prev,
      0
    );
  }

  updateState() {
    this.setState({
      items: this.getItems(),
      max: this.getMax()
    });
  }

  addItem(name) {
    if (!this.state.items.hasOwnProperty(name)) {
      this.items[name] = 1;
      this.updateState();
    }
  }

  addOne(name) {
    this.items[name]++;
    this.updateState();
  }

  subOne(name) {
    if (this.items[name] > 0) {
      this.items[name]--;
      this.updateState();
    }
  }

  render() {
    return (
      <div className="App">
        <Form addItem={this.addItem} />
        <Chart {...this.state} addOne={this.addOne} subOne={this.subOne} />
      </div>
    );
  }
}

export default App;
