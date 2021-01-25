import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
//App component with a Navbar component containing a title and icon property. Below that is a Users component.
class App extends Component {
  render() {
    return (
      <Fragment className='App'>
        <Navbar title=' Discover Github Profiles' icon='far fa-grin-beam' />
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
