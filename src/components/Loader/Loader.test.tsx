import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders navbar', () => {
  render(<Loader />);
  const loadingText = screen.getByText(/Loading../i);
  expect(loadingText).toBeInTheDocument();
});
