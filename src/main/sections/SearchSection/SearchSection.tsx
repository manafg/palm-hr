import React from "react";
import {Header , SearchInput , Filters , BookCard} from '../../components';
import {Grid , Box, Container} from '@mui/material';

const options = [
    {
      firstLetter: 'T',
      title: 'The Shawshank Redemption',
      id: '1994',
    },
    {
      firstLetter: 'T',
      title: 'The Godfather',
      id: '1972',
    },
  ];

  
function SearchSection () {
  const cards = [{id: 1, title: 'test'}, {id: 2, title: 'test'}, {id: 3, title: 'test'}]
        return (
            <>
                <Header></Header>
                <Container>
                <Box sx={{ flexGrow: 1 , marginTop:2}}>
                    <Grid container spacing={2}>
                        <Grid item sx={{alignItems: 'center'}} xs={12}>
                            <SearchInput options={options}/>
                            <Filters/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop:8}}>
                      {cards.map((a,b)=>{
                        return (<Grid item sx={{alignItems: 'center'}} xs={4} md={4}>
                            <BookCard/>
                        </Grid>)
                      })}
                    
                    </Grid>
                </Box>
                </Container>
            </>
        )
}

export default SearchSection