import React from 'react';
import {swallow} from 'enzyme';
import RSSFeed from './RSSFeed';
import Card from '@material-ui/core/Card';
import { expect } from 'chai';

it('should render RSSFeed', () => {
  const posts = [{'title': 'primeiro post'}, {'title': 'segundo post'}]
  const feed = swallow(<RSSFeed posts={posts}></RSSFeed>);
  
  expect(feed.text()).to.contains('RSS Feed');
  expect(feed.text()).to.contains('primeiro post');
  expect(feed.text()).to.contains('segundo post');
});