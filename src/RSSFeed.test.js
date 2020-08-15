import React from 'react';
import {shallow} from 'enzyme';
import RSSFeed from './RSSFeed';
import { expect } from 'chai';

it('should render RSSFeed', () => {
  const posts = [{'title': 'primeiro post'}, {'title': 'segundo post'}];
  const feed = shallow(<RSSFeed posts={posts}></RSSFeed>);
  
  expect(feed.text()).to.contains('RSS Feed');
  expect(feed.text()).to.contains('primeiro post');
  expect(feed.text()).to.contains('segundo post');
});