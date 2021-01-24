import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <Fragment className='App'>
        <Navbar title=' Random Github Viewer' icon='far fa-grin-beam' />
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
