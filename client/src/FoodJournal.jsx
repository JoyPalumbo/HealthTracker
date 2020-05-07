import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    axios.post('/nutrition', {
      nutrition: {
        foodName: this.state.foodName,
        calories: this.state.calories,
        carbs: this.state.carbs,
        sugar: this.state.sugar,
        fat: this.state.fat,
        other: this.state.other
      }
    })
      .then((response) => {
        console.log("sending nutrition to server", response)
      })
      .catch(err => {
        console.log("ops, didn't send nutrition to server", err);
      })
  }

  render() {
    const food = this.state.foodName;
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <form>
              <label>
                Food Name:
          <input
                  name="foodName"
                  type="text"
                  class="form-control"
                  // value={this.state.foodName}
                  onChange={this.handleChange} />
              </label>
              <br />
              <label>
                Calories:
          <input
                  name="calories"
                  type="number"
                  class="form-control"
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Carbs:
          <input
                  name="carbs"
                  type="number"
                  class="form-control"
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Sugar:
          <input
                  name="sugar"
                  type="number"
                  class="form-control"
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Fat:
          <input
                  name="fat"
                  type="number"
                  class="form-control"
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Additional Info:
          <input
                  name="other"
                  type="number"
                  class="form-control"
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <input type="submit" value="Submit" class="form-control" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
        {/* <p> Food Eaten: {food} </p> */}
      </div >
    );
  }
}

export default FoodJournal;
