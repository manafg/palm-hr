import { BookInfo } from "../context/BooksContext/types";


function searchByTitleOptions(array: BookInfo[]) {
  return array.map((option) => {
    const firstLetter = option.volumeInfo.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title:option.volumeInfo.title,
    };
  });
}

function searchByAuthorOptions(array: BookInfo[]) {
  return array.map((option) => {
    const firstLetter = option.volumeInfo?.authors?.length ? option.volumeInfo.authors[0][0].toUpperCase() : "A";
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title:option.volumeInfo?.authors?.length ? option.volumeInfo?.authors[0] : 'None',
    };
  });
}

function searchByPuplisherOptions(array: BookInfo[]) {
  return array.map((option) => {
    const firstLetter = option.volumeInfo.publisher[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title:option.volumeInfo.publisher,
    };
  });}

  function searchByTitle(array: BookInfo[], text: string) {
    return array.filter(obj => obj?.volumeInfo.title.includes(text));
  }

  function searchByAuthor(array: BookInfo[], text: string) {
    return array.filter(obj => obj?.volumeInfo.authors[0].includes(text));
  }

  function searchByPuplisher (array: BookInfo[], text: string) {
    return array.filter(obj => obj?.volumeInfo.publisher.includes(text));
  }



export {searchByAuthor,  searchByPuplisher,searchByTitle, searchByTitleOptions, searchByAuthorOptions, searchByPuplisherOptions };
