import * as fs from "node:fs";

import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {
  const contactsList = Array(number).fill(0).map(createFakeContact);

  console.log(contactsList);
};

generateContacts(5);
