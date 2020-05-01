import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weightGoal: 0,
      currentWeight: 0,
      waterGoal: 0,
      calorieGoal: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ weightGoal: event.target.value })

  }

  handleSubmit(event) {
    event.preventDefault();
    // let ounces2 = parseInt(this.state.total) + parseInt(this.state.ounces);
    // //ounces2 is console logging correctly
    // console.log(ounces2, "this is ounces, total");
    this.setState({ weightGoal: event.target.value })
    console.log(event.target.value);
    // console.log(this.state.weightGoal);
    // //Total is always one entry behind
    // console.log("is the total working?", this.state.total);
    // axios.post('/water', {
    //   ounces: this.state.total
    // })
    //   .then((response) => {
    //     console.log("sending water to server", response)
    //   })
    //   .catch(err => {
    //     console.log("ops, didn't send water to server", err);
    //   })
  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="Profile">
        <p>
          Profile
          </p>
        <p>
          <strong>Goals</strong>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            What is your weight goal?
          <input
              name="goalWeight"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <p> Your weight goal is: {this.state.weightGoal}</p>
          <br />
          <label>
            What is your current weight
          <input
              name="currentWeight"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <p> Your current weight is: {this.state.currentWeight}</p>
          <br />
          <label>
            What is your water intake goal in ounces?
          <input
              name="waterGoal"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <p> Your weight goal is: {this.state.waterGoal}</p>
          <br />
          <label>
            What is your calories eaten per day goal?
          <input
              name="calorieGoal"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <p> Your weight goal is: {this.state.calorieGoal}</p>
          <br />
          <input type="submit" value="Submit" />
        </form>

      </div>

    );
  }
}

export default Profile;