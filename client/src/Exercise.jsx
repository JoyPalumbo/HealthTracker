import React, { Component } from 'react';
import axios from 'axios';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      minutes: 0,
      reps: 0,
      notes: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ exercise: event.target.value })
    console.log("we're entering exercise name:", this.state.exercise);
  }

  handleSubmit(event) {
    event.preventDefault();
    //ounces2 is console logging correctly
    // this.setState({ exercise:  })

    //Total is always one entry behind
    // console.log("is the total working?", this.state.total);
    axios.post('/exercise', {

    })
      .then((response) => {
        console.log("sending exercise to server", response)
      })
      .catch(err => {
        console.log("ops, didn't send exercise to server", err);
      })
  }

  componentDidMount() {
    axios.get('/exercise')
      .then(response => {
        // this.setState({ exercise: response.data. })
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      // <div>
      //   <h1>Welcome to the Exercise page</h1>
      // </div>
      <div>
        <form>
          <label>
            Exercise done:
<input
              name="exercise"
              type="text"
              // value={this.state.foodName}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            How many minutes did you exercise for?:
      <input
              name="time"
              type="text"
              // value={this.state.time}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            reps done:
      <input
              name="reps"
              type="text"
              // value={this.state.reps}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Notes:
      <input
              name="notes"
              type="text"
              value={this.state.notes}
              onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        {/* <p> Food Eaten: {food} </p> */}
      </div >

    );
  };


}

export default Exercise;

