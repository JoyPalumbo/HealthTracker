import React, { Component } from 'react';
import './App.css';
import Water from './Water';
import Profile from './Profile';
import Exercise from './Exercise';
import Prev from './Prev';
import Home from './Home';
import FoodJournal from './FoodJournal';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    sideDrawerOpen: false
  };
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.drawerToggleClickHandler = this.drawerToggleClickHandler(this);
  // }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      nameOfItem: target.value
    });
    console.log(this.state.nameOfItem);
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    // const response = await fetch('/api/hello');
    // const body = await response.json();
    // if (response.status !== 200) throw Error(body.message);

    // return body;
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <div style={{ height: '100 %' }}>
          {/* <header className="App-header"> */}
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <main style={{ marginTop: '64px' }}>
            <div className="web-title">

              <h1>
                Health Diary
          </h1>
            </div>
          </main>
          <Router>
            <Route path="/home" component={Home} />
          </Router>
          <Router>
            <Route path="/water" component={Water} />
          </Router>
          <Router>
            <Route path="/food" component={FoodJournal} />
          </Router>
          <Router>
            <Route path="/exercise" component={Exercise} />
          </Router>
          <Router>
            <Route path="/profile" component={Profile} />
          </Router>
          <Router>
            <Route path="/prev" component={Prev} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;