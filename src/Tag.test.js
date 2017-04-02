import React from 'react';
import {shallow} from 'enzyme';
import Tag from './Tag';
import { expect } from 'chai';

it('should render the link information on a component Tag', () => {
  const links = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];
  const tag = shallow(<Tag titleTag="Segurança" links={links}></Tag>);

  expect(tag.find('GridList > a')).to.have.length(1);

  const tagA = tag.find('GridList > a').nodes[0];
  expect(tagA.props.href).to.equal(links[0].url);

  const gridTile = tagA.props.children;
  expect(gridTile.props.title).to.equal(links[0].title);

  const tagImg = gridTile.props.children;
  expect(tagImg.props.src).to.equal(links[0].image);
});

it('should show for each group of tags a title', () => {
  const link = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];
  const tag = shallow(<Tag titleTag="Segurança" links={link}></Tag>);

  expect(tag.find('Subheader').nodes[0].props.children).to.equal('Segurança');
});

it('should render just 3 links even the list come with more than 3', () => {
  const links = [
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
  ];
  const tag = shallow(<Tag titleTag="Segurança" links={links}></Tag>);

  expect(tag.find('GridList > a')).to.have.length(3);
});

it('should render a default image when the page does not have an image', () => {
  const link = [{"url": "https://link.com", "title": "a title"}];

  const tag = shallow(<Tag titleTag="Segurança" links={link} ></Tag> );

  expect(tag.find('GridList > a > GridTile > img').nodes[0].props.src).to.equal('http-image.png');
});
