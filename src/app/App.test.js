import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {getTagList, getRSSFeed} from './AppService';
jest.mock('./AppService');

test('should render a App component', async () => {
  getTagList.mockResolvedValue([]);
  getRSSFeed.mockResolvedValue([]);

  await waitFor(() => render(<App></App>) );
  
  expect(screen.getByText('Criar Tag')).toBeInTheDocument();
  expect(screen.getByText('Adicionar Link')).toBeInTheDocument();
});

test('should render a Tags component', async () => {
  getTagList.mockResolvedValue([]);
  getRSSFeed.mockResolvedValue([]);

  await waitFor(() => render(<App></App>) );

  expect(screen.getByText('Links Adicionados')).toBeInTheDocument();
});

test('should render RSS feed component', async () => {
  getTagList.mockResolvedValue([]);
  getRSSFeed.mockResolvedValue([{'title': 'primeiro-titulo', 'link': 'http:link1'}]);
  
  await waitFor(() => render(<App></App>) );

  expect(screen.getByText('RSS Feed')).toBeInTheDocument();
  expect(screen.getByText('primeiro-titulo')).toBeInTheDocument(); 
});

xtest('should deal with error from tag endpoint', () => {
  
});
