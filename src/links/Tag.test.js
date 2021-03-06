import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

test('should render the link information on a component Tag', () => {
  const links = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];
  render(<Tag titleTag="Segurança" links={links}></Tag>);

  expect(screen.getByText('#Segurança')).toBeInTheDocument();
});

test('should show for each group of tags a title', () => {
  const link = [{"url": "https://link.com", "title": "a title", "image": "https://image.com"}];

  render(<Tag titleTag="Segurança" links={link}></Tag>);

  expect(screen.getByText("a title")).toBeInTheDocument();
});

test('should render just 3 links even the list come with more than 3', () => {
  const links = [
    {"url": "https://link.com", "title": "a title", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title 2", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title 3", "image": "https://image.com"},
    {"url": "https://link.com", "title": "a title 4", "image": "https://image.com"},
  ];

  render(<Tag titleTag="Segurança" links={links}></Tag>);

  const componenteLink = screen.queryByText("a title 4");
  expect(componenteLink).not.toBeInTheDocument();
});