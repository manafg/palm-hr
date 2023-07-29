import React from 'react';
import {
  BooksInfoProvider,
  QueryContextProvider,
  PalmThemeProvider
} from './main/context'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header } from './main/components'
import SearchSection from './main/sections/SearchSection'
import BooksSection from './main/sections/BooksSection'

function App() {
  return (
    <QueryContextProvider>
      <PalmThemeProvider>
        <BooksInfoProvider>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/"  element={<SearchSection/>} />
              <Route path=":id" element={<BooksSection/>}/>
            </Routes>
         </BrowserRouter>
        </BooksInfoProvider>
      </PalmThemeProvider>
    </QueryContextProvider>
  );
}

export default App;
