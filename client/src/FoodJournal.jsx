import React, { Component } from 'react';
import './App.css';

class FoodJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      calories: 0,
      carbs: 0,
      sugar: 0,
      fat: 0,
      other: '',
      listOfFoods: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ foodName: event.target.value })
    console.log("we're entering food name:", this.state.foodName);
  }
  handleSubmit(event) {
    //save to database
    event.preventDefault();
    let foodList = this.state.listOfFoods;
    foodList.push(this.state.foodName);
    // this.setState({ foodName: event.target.value })
    console.log("are we logging anything?", this.state.listOfFoods);
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
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <p> Food Eaten: {food} </p>
      </div>
    );
  }
}

export default FoodJournal;
