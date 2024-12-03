import { readContacts } from '../utils/readContacts.js';



export const countContacts = async () => {
    const cont = await readContacts();
    return cont.length;
};

console.log(await countContacts());
