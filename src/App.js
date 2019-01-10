import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Colors from './constants/Colors';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <DetailPage />
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
