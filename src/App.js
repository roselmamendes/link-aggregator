import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tags from './Tags';

class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
       <Tags/>
      </MuiThemeProvider>
    );
  }

}

export default App;
