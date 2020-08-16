import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Tags from './Tags';
import { expect } from 'chai';
import RSSFeed from './RSSFeed';

jest.mock('./AppService');
import getTagList from './AppService';

it('should render a Tags component', () => {
  getTagList.mockImplementation(() => []);
  const app = shallow(<App></App>);

  expect(app.find(Tags)).to.have.length(1);
  expect(app.find(RSSFeed)).to.have.length(1);
});

it('should deal with error from tag endpoint', () => {
  
});
