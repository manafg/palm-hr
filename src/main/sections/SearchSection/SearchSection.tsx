import React, {useContext, useState , useEffect} from "react";
import {Header , SearchInput , Filters , BookCard} from '../../components';
import {Grid , Box, Container} from '@mui/material';
import useBooksContextInit from '../../hooks/useInitBooks';
import useBookData from '../../hooks/useBookData';

import {BooksInfoStateContext} from '../../context/BooksContext/BooksContext'
import {BookInfo} from '../../context/BooksContext/types'

function SearchSection () {
  const { isLoading, refetch } = useBooksContextInit();
  const { books, filters, options, setFilters } = useBookData();


  const clearSearch = () => {
    refetch();
  };

        return (
            <>
                <Container>
                <Box sx={{ flexGrow: 1 , marginTop:2}}>
                    <Grid container spacing={2}>
                        <Grid item sx={{alignItems: 'center'}} xs={12}>
                            <SearchInput clearSearch={clearSearch} type={filters} options={options}/>
                            <Filters selectedValue={filters} handleChange={(e:any)=>setFilters(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop:8}}>
                      {books?.map((item : BookInfo)=>{
                        return (<Grid item sx={{alignItems: 'center'}} xs={4} md={4}>
                            <BookCard {...item}/>
                        </Grid>)
                      })}
                    
                    </Grid>
                </Box>
                </Container>
            </>
        )
}

export default SearchSection