import React, { Component, useState, useEffect } from 'react';
import Tags from '../links/Tags';
import RSSFeed from '../rssFeed/RSSFeed';
import {getRSSFeed, getTagList} from './AppService';
import style from '../style.css';

const App = (props) => {
  const [tagList, setTagList] = useState([]);
  const [rssFeed, setRssFeed] = useState([]);

  useEffect(() =>{
    getTagList().then((response) => {
      setTagList(response);
    });

    getRSSFeed().then((response) => { setRssFeed(response)});
    
  }, []);

  return (
    <div className='app'>
      <div className='menu'>
        <a className="buttonMenu">Criar Tag</a>
        <a className="buttonMenu">Adicionar Link</a>
      </div>
      <Tags tagsList={tagList} />
      <RSSFeed posts={rssFeed} />
    </div>
  );

}

export default App;
