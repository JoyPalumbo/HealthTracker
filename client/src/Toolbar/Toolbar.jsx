import React from 'react';
import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"> <a href="/home">Home Page</a>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/water">Water</a>
            </li>
            <li>
              <a href="/food">Food</a>
            </li>
            <li>
              <a href="/exercise">Exercise</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header >
);

export default Toolbar;

