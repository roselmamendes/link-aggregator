import React from 'react';
import {shallow} from 'enzyme';
import Tags from './Tags';
import Tag from './Tag';
import { expect } from 'chai';

it('should render a empty list of Tag component', () => {
  const tagsList = [];
  const tags = shallow(<Tags tagsList={tagsList}/>);

  expect(tags.find(Tag)).to.have.length(0);

});

it('should render a list of Tag component', () => {
  const tagsList = [
    {
      "tag": "Segurança",
      "links": [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}]
    },
    {
      "tag": "Clean Architecture",
      "links": [{"url": "https://link1.com", "title": "a title 1", "image": "https//image1.com"}]
    }
  ];
  const tags = shallow(<Tags tagsList={tagsList}/>);

  expect(tags.find(Tag)).to.have.length(2);

  const tag1 = tags.find(Tag).nodes[0];
  expect(tag1.props.titleTag).to.equal(tagsList[0].tag);
  expect(tag1.props.links).to.have.length(1);

  const tag2 = tags.find(Tag).nodes[1];
  expect(tag2.props.titleTag).to.equal(tagsList[1].tag);
  expect(tag2.props.links).to.have.length(1);
});
