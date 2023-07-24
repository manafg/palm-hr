import React from 'react';
import {
  BooksInfoProvider,
  QueryContextProvider,
  PalmThemeProvider
} from './main/context'
import './App.css';

function App() {
  return (
    <QueryContextProvider>
      <PalmThemeProvider>
        <BooksInfoProvider>
            <div></div>
        </BooksInfoProvider>
      </PalmThemeProvider>
    </QueryContextProvider>
  );
}

export default App;
