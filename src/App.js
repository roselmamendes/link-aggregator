import React, { Component } from 'react';
import Tags from './Tags';
import RSSFeed from './RSSFeed';
import request from 'superagent';
const posts = [
  {'title': 'primeiro post', 'link': 'https://material-ui.com/components/cards/'}, 
  {'title': 'segundo post', 'link': 'https://docs.travis-ci.com/user/languages/javascript-with-nodejs/'}
];
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {tagsList: []};
  }

  componentDidMount() {
    request
      .get('http://localhost:3000/tags-list')
      .end((error, response) => {
        this.setState({tagsList: response.body});
      });
  }

  render() {

    return (
      <div>
       <Tags tagsList={this.state.tagsList} />
       <RSSFeed posts={posts} />
      </div>
    );
  }

}

export default App;
