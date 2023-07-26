import React from 'react';
import {
  BooksInfoProvider,
  QueryContextProvider,
  PalmThemeProvider
} from './main/context'
import './App.css';
import SearchSection from './main/sections/SearchSection/SearchSection'
function App() {
  return (
    <QueryContextProvider>
      <PalmThemeProvider>
        <BooksInfoProvider>
            <SearchSection></SearchSection>
        </BooksInfoProvider>
      </PalmThemeProvider>
    </QueryContextProvider>
  );
}

export default App;
