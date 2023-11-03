import { render, screen } from '@testing-library/react';
import App from './App';

test('Rendering Title Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/RAIL DETECT/i);
  expect(linkElement).toBeInTheDocument();
});

