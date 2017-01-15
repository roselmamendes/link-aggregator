import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Tags from './Tags';
import { expect } from 'chai';

it('should render a Tags component', () => {
  const app = shallow(<App></App>);

  expect(app.find(Tags)).to.have.length(1);
});
