import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/index'

test('renders navbar', () => {

  render(<Provider store={store}>
    <App/>
  </Provider>);
  const linkElement = screen.getByText(/Abley Map Application/i);
  expect(linkElement).toBeInTheDocument();
});
