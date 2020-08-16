import React, { Component } from 'react';
import Tags from './Tags';
import RSSFeed from './RSSFeed';
import getTagList from './AppService';
import style from './style.css';

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
    getTagList().then((tagsList) => {
      this.setState({tagsList: tagsList});
    });
    
  }

  render() {

    return (
      <div className='app'>
        <div className='menu'>
          <a className="buttonMenu">Criar Tag</a>
          <a className="buttonMenu">Adicionar link</a>
        </div>
        <Tags tagsList={this.state.tagsList} />
        <RSSFeed posts={posts} />
      </div>
    );
  }

}

export default App;
