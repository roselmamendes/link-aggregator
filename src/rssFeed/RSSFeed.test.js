import React from 'react';
import { render, screen } from '@testing-library/react';
import RSSFeed from './RSSFeed';

test('should render RSSFeed', () => {
  const posts = [{'title': 'primeiro post'}, {'title': 'segundo post'}];
  render(<RSSFeed posts={posts}></RSSFeed>);
  
  expect(screen.getByText('RSS Feed')).toBeInTheDocument();
  expect(screen.getByText('primeiro post')).toBeInTheDocument();
  expect(screen.getByText('segundo post')).toBeInTheDocument();
});