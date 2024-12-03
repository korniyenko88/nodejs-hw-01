import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const list = await readContacts();
  const newList = createFakeContact();
  await writeContacts ([...list, newList]) ;
};
addOneContact();
