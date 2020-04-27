import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weightGoal: 0,
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
    console.log(this.state.weightGoal);
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
          <strong>Enter weight goal</strong>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p> Your weight goal is: {this.state.weightGoal}</p>
      </div>

    );
  }
}

export default Profile;