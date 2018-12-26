import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Colors from './constants/Colors';
import HomePage from './pages/HomePage';

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
