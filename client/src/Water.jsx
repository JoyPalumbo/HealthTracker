import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Water extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ounces: 0,
      total: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ ounces: event.target.value })

  }

  handleSubmit(event) {
    let ounces = parseInt(this.state.total) + parseInt(this.state.ounces);
    this.setState({ total: ounces })
    event.preventDefault();
    //Total is always one entry behind
    console.log("is the total working?", this.state.total);
    axios.post('/water', {
      ounces: this.state.total
    })
      .then((response) => {
        console.log("sending water to server", response)
      })
      .catch(err => {
        console.log("ops, didn't send water to server", err);
      })
  }

  componentDidMount() {

  }


  render() {
    const ounces = this.state.total
    return (
      <div className="water">
        <p>
          Water tracker
          </p>
        <p>
          <strong>Enter ounces you've drank</strong>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>

            <input type="text"
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p> You have drank {ounces} ounces</p>
      </div>

    );
  }
}

export default Water;