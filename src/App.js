import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HomePage from './pages/HomePage';

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    return <HomePage />;
  }
}

export default App;
