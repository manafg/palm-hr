import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Filter from '../Filters';

describe('Filter', () => {
  test('renders radio buttons with correct labels', () => {
    render(<Filter selectedValue="title" handleChange={() => {}} />);

    const titleRadio = screen.getByLabelText('title');
    const authorsRadio = screen.getByLabelText('authors');
    const publisherRadio = screen.getByLabelText('publisher');

    expect(titleRadio).toBeInTheDocument();
    expect(authorsRadio).toBeInTheDocument();
    expect(publisherRadio).toBeInTheDocument();

    expect(screen.getByText('Filter by Title')).toBeInTheDocument();
    expect(screen.getByText('Filter by Authors')).toBeInTheDocument();
    expect(screen.getByText('Filter by Publisher')).toBeInTheDocument();
  });

  test('calls handleChange when radio button is clicked', () => {
    const handleChangeMock = jest.fn();
    render(<Filter selectedValue="title" handleChange={handleChangeMock} />);

    const authorsRadio = screen.getByLabelText('authors');

    fireEvent.click(authorsRadio);

    expect(handleChangeMock).toHaveBeenCalledTimes(1);
    expect(handleChangeMock.mock.calls[0][0].target.value).toBe('authors');
  });

  test('marks the correct radio button as checked', () => {
    render(<Filter selectedValue="authors" handleChange={() => {}} />);

    const titleRadio = screen.getByLabelText('title');
    const authorsRadio = screen.getByLabelText('authors');
    const publisherRadio = screen.getByLabelText('publisher');

    expect(titleRadio).not.toBeChecked();
    expect(authorsRadio).toBeChecked();
    expect(publisherRadio).not.toBeChecked();
  });
});
