import React from 'react';
import { render, screen } from '@testing-library/react';
import HeavyComponent from './HeavyComponent';

test('renders HeavyComponent', () => {
    render(<HeavyComponent />);
    const element = screen.getByText(/heavy component/i);
    expect(element).toBeInTheDocument();
});