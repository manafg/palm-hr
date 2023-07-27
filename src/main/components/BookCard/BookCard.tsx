import * as React from 'react';
import {Card , CardActions , CardContent , CardMedia , Button, Typography} from '@mui/material';
import {BookInfo} from '../../context/BooksContext/types';
import { styled } from '@mui/material/styles';
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
}));


 function BookCard(book: BookInfo) {
  const DescriptionTypography = styled(Typography)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '3', 
    '-webkit-box-orient': 'vertical',
  }));
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={book.volumeInfo.imageLinks?.thumbnail}
        title="Book Title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.volumeInfo.title}
        </Typography>
        <DescriptionTypography variant="body2" color="text.secondary">
            {book.volumeInfo.description}
        </DescriptionTypography>
      </CardContent>
      <CardActions>
        
        <Button size="small">View</Button>
      </CardActions>
    </StyledCard>
  );
}

export default BookCard;