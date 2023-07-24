import PalmHrAPI from './palmhrAPi';

export async function getBooks () {
    const resposne = await PalmHrAPI('');
    const result = await resposne.data;
    return result;
}