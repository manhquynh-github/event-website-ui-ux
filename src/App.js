import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Colors from './constants/Colors';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HomePage />
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
  },
  typography: {
    allVariants: {
      lineHeight: 'normal',
    },
  },
});

export default App;
