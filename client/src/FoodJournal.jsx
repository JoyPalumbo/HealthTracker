import React, { Component } from 'react';
import './App.css';

class FoodJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      listOfFoods: ['pie']

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ foodName: event.target.value })
    // console.log(this.state.foodName);
  }
  handleSubmit(event) {
    //save to database
    this.state.listOfFoods.push(this.state.foodName);
    // this.setState({ foodName: event.target.value })
    // event.preventDefault();
    console.log(this.state.listOfFood);
  }

  render() {
    const food = this.state.foodName;
    return (
      <div>
        <form>
          <label>
            Food Name:
          <input
              name="nameOfItem"
              type="text"
              // value={this.state.foodName}
              onChange={this.handleChange} />
          </label>
          <br />
          {/* <label>
            Number of items:
          <input
              name="numberOfItems"
              type="number"
              value={this.state.numberOfItems}
              onChange={this.handleInputChange} />
          </label> */}
          {/* <label>
            Description of Item:
          <input
              name="descriptionOfItem"
              type="text"
              value={this.state.descriptionOfItem}
              onChange={this.handleInputChange} />
          </label> */}
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p> Food Eaten: {food} </p>
      </div>
    );
  }
}

export default FoodJournal;
