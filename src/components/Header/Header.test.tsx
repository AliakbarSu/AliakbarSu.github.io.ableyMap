import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Should display the correct heading text', () => {
  render(<Header />);
  const navheading = screen.getByText(/Abley Map Application/i);
  expect(navheading).toBeInTheDocument();
});

test('Should display the correct nav items', () => {
    render(<Header />);
    const howToText = screen.getByText(/How To/i);
    expect(howToText).toBeInTheDocument();

    const aboutUsText = screen.getByText(/About Us/i);
    expect(aboutUsText).toBeInTheDocument();
  });
