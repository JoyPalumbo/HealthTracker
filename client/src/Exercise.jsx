import React, { Component } from 'react';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      time: 0,
      reps: 0,
      notes: ''
    };
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
            How long did you exercise for?:
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

