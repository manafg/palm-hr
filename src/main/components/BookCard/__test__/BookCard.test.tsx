// @ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from '../BookCard';
import  bookInfo from "../../../mocks/bookinfo";
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom')



describe('BookCard', () => {
  test('renders book title and description', () => {
    //ts-ignore
    render(<BookCard {...bookInfo} />);

    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('Test Brazil')).toBeInTheDocument();
  });

  test('renders book thumbnail', () => {
    render(<BookCard {...bookInfo} />);

    const thumbnailImage = screen.getByRole('img');
    expect(thumbnailImage).toBeInTheDocument();
  });

  test('navigates to the book view on "View" button click', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);



    render(<BookCard {...bookInfo} />);

    const viewButton = screen.getByRole('button', { name: /View/i });
    fireEvent.click(viewButton);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('QltiDwAAQBAJ');
  });
});
