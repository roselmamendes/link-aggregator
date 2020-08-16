import React from 'react';
import {shallow} from 'enzyme';
import Tag from './Tag';
import { expect } from 'chai';

it('should render the link information on a component Tag', () => {
  const links = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];
  const tag = shallow(<Tag titleTag="Segurança" links={links}></Tag>);

  expect(tag.find('li')).to.have.length(1);

  const tagA = tag.find('li > a').get(0);
  expect(tagA.props.href).to.equal(links[0].url);
});

it('should show for each group of tags a title', () => {
  const link = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];
  const tag = shallow(<Tag titleTag="Segurança" links={link}></Tag>);

  expect(tag.find('.tagName').get(0).props.children).to.equal('Segurança');
});

it('should render just 3 links even the list come with more than 3', () => {
  const links = [
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
  ];
  const tag = shallow(<Tag titleTag="Segurança" links={links}></Tag>);

  expect(tag.find('li')).to.have.length(3);
});