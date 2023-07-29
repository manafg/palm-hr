import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import useInitSingleBook from '../../hooks/useInitSingleBook'


const BookSection = () => {
   const { id } = useParams<{ id: string }>();
   const { book, isLoading } = useInitSingleBook(id);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book?.volumeInfo.title} style={{ width: 150, height: 200 }} />
      <Box>
        <Typography variant="h4">{book?.volumeInfo.title}</Typography>
        <Typography variant="subtitle1">{`Author: ${book?.volumeInfo?.authors.join(', ')}`}</Typography>
        <Typography variant="subtitle1">{`Published Year: ${book?.volumeInfo.publishedDate}`}</Typography>
        <Typography component="div" >{book?.volumeInfo.description}</Typography>
      </Box>
    </Box>
  );
};

export default BookSection;
