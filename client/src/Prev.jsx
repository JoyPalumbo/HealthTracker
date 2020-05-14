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
    this.setState({ date });
    let dateInfo = this.state.date;
    console.log('this is your selected date', dateInfo
    )
    // axios.get(`http://localhost:3000/prev/${dateInfo}`, {
    //   // axios.get(`/prev/${dateInfo}`, {
    //   // date: this.state.date
    // })
    //   .then((response) => {
    //     console.log("sending date selected to server!!!!!!!!!!!!!!!!!!!", response)
    //   })
    //   .catch(err => {
    //     console.log("ops, didn't send selected date to server", err);
    //   })
  }



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