import React, { Component } from 'react';
import Tags from './Tags';
import RSSFeed from './RSSFeed';
import request from 'superagent';
const posts = [{'title': 'primeiro post'}, {'title': 'segundo post'}];
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
       {/* <Tags tagsList={this.state.tagsList} /> */}
       <RSSFeed posts={posts} />
      </div>
    );
  }

}

export default App;
