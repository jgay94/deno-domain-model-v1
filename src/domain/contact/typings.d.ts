import { IRepository } from "@storage/mod.ts";

import { Contact } from "@contact/model.ts";

export interface ContactConstructorParams {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountId?: string;
}

export interface IContactRepository extends IRepository<Contact> {}
