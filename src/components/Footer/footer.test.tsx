import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Should display the correct copyright text', () => {
  render(<Footer />);
  const copyrightText = screen.getByText(/2021 - All Rights Reserved/i);
  expect(copyrightText).toBeInTheDocument();
});
