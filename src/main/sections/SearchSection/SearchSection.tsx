import React, {useContext, useState , useEffect} from "react";
import {Header , SearchInput , Filters , BookCard} from '../../components';
import {Grid , Box, Container} from '@mui/material';
import useBooksContextInit from '../../hooks/useInitBooks';
import {BooksInfoStateContext} from '../../context/BooksContext/BooksContext'
import {BookInfo} from '../../context/BooksContext/types'
import {searchByAuthorOptions , searchByPuplisherOptions , searchByTitleOptions} from '../../utils/sorting'
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
  const { isLoading, refetch } = useBooksContextInit();
  const state = useContext(BooksInfoStateContext);
  const [filters, setFilters] = useState('');
  const [options, setOptions] = useState([]);

  const clearSearch = () => {
    refetch();
  };

  useEffect(()=>{
    let array;
    switch (filters) {
      case 'title':
        array = searchByTitleOptions(books);
        break;
      case 'publisher':
        array = searchByPuplisherOptions(books)
        break;
      default:
        case 'publisher':
          array = searchByAuthorOptions(books)
        break;
    }
    
     // @ts-ignore
     setOptions(array);

  },[filters])


  const books: any = state[0];
        return (
            <>
                <Header></Header>
                <Container>
                <Box sx={{ flexGrow: 1 , marginTop:2}}>
                    <Grid container spacing={2}>
                        <Grid item sx={{alignItems: 'center'}} xs={12}>
                            <SearchInput clearSearch={clearSearch} type={filters} options={options}/>
                            <Filters selectedValue={filters} handleChange={(e:any)=>setFilters(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop:8}}>
                      {books.map((item : BookInfo)=>{
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