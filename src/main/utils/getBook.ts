import axios from 'axios';
export async function getBook (id: string) {
    const resposne = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const result = await resposne.data;
    return result;
}