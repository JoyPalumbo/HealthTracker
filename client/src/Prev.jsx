import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import datepicker from 'js-datepicker'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



class Prev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()

    };

    this.onChange = this.onChange.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = date => {
    this.setState({ date })
    console.log('this is your selected date', this.state.date)
    axios.post('/prev', {
      date: this.state.date
    })
      .then((response) => {
        console.log("sending date selected to server", response)
      })
      .catch(err => {
        console.log("ops, didn't send selected date to server", err);
      })
  }
  // handleChange(event) {
  //   this.setState({ ounces: event.target.value })
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   // this.setState({ total: ounces2 })
  //   //Total is always one entry behind
  //   console.log("is the total working?", this.state.total);
  //   axios.post('/Prev', {
  //     ounces: this.state.total
  //   })
  //     .then((response) => {
  //       console.log("sending Prev to server", response)
  //     })
  //     .catch(err => {
  //       console.log("ops, didn't send Prev to server", err);
  //     })
  // }

  componentDidMount() {

  }


  render() {
    return (
      <div className="Prev">
        <p>
          Previous entries
          </p>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>

    );
  }
}

export default Prev;