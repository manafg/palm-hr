import PalmHrAPI from './palmhrAPi';
import axios from 'axios';
export async function getBooks () {
    const resposne = await axios.get('https://www.googleapis.com/books/v1/volumes?q=dubai&maxResults=20&startIndex=1');
    const result = await resposne.data.items;
    return result;
}