import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tags from './Tags';

const tags = [
  {
    "tag": "Segurança",
    "links": [
      "https://medium.com/@roselmamendes/todas-as-pessoas-deveriam-saber-o-que-%C3%A9-seguran%C3%A7a-digital-59ea745a4763#.ax61l6p4c"
    ]
  },
  {
    "tag": "Testes em JS",
    "links": [
      "http://sinonjs.org/"
    ]
  }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {tagsList: []};
  }

  componentDidMount() {
    this.setState({tagsList: []});
  }

  render() {

    return (
      <MuiThemeProvider>
       <Tags tagsList={this.state.tagsList} />
      </MuiThemeProvider>
    );
  }

}

export default App;
