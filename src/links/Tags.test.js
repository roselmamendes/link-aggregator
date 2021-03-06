import React from 'react';
import { render, screen } from '@testing-library/react';
import Tags from './Tags';

test('should render a empty list of Tag component', () => {
  const tagsList = [];
  
  render(<Tags tagsList={tagsList}/>);

  expect(screen.getByText("Links Adicionados")).toBeInTheDocument();
});

test('should render a list of Tag component', () => {
  const tagsList = [
    {
      "title": "Segurança",
      "links": [
        {"url": "https://link.com", "title": "a title", "image": "https://image.com"}
        ]
    },
    {
      "title": "Clean Architecture",
      "links": [
        {"url": "https://link1.com", "title": "a title 1", "image": "https//image1.com"},
        {"url": "https://link2.com", "title": "a title 2", "image": "https//image2.com"}
        ]
    }
  ];

  render(<Tags tagsList={tagsList}/>);

  expect(screen.getByText("#Segurança")).toBeInTheDocument();
  expect(screen.getByText("#Clean Architecture")).toBeInTheDocument();
  
});
