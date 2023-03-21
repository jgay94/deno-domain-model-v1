import { IRepository } from "@domain/common/mod.ts";

import { Contact } from "@domain/contact/entity.ts";

export interface ContactConstructorParams {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountId?: string;
}

export interface IContactRepository extends IRepository<Contact> {}
