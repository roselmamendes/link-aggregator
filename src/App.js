import React, { Component } from 'react';
import Tags from './Tags';
import RSSFeed from './RSSFeed';
import getTagList from './AppService';

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
    this.setState({tagsList: getTagList()});
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
