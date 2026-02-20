import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders dashboard and modules', () => {
    render(<App />);
    expect(screen.getByText('Networking Learning Hub')).toBeInTheDocument();
    expect(screen.getByText('Progress Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Subnetting Practice Generator')).toBeInTheDocument();
    expect(screen.getByText('OSI Model')).toBeInTheDocument();
  });
});
