import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RenderLink from './RenderLink';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <List style="width: 600px;">
          <ListItem>
            <RenderLink></RenderLink>
          </ListItem>
          <ListItem>
            <RenderLink></RenderLink>
          </ListItem>
        </List>
      </MuiThemeProvider>
    );
  }

}

export default App;
