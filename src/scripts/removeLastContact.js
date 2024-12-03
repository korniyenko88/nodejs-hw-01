import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const cont = await readContacts();
  cont.pop();
  await writeContacts(cont);
};

removeLastContact();
