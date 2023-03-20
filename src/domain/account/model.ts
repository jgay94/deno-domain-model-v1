import { Identifiable } from "@storage/mod.ts";
import { Contact } from "@contact/mod.ts";

import { AccountConstructorParams } from "@account/typings.d.ts";

export class Account implements Identifiable {
  public readonly id: string;
  public name: string;
  private contacts: Contact[];

  constructor(params: AccountConstructorParams) {
    this.id = params.id;
    this.name = params.name;
    this.contacts = params.contacts ?? [];
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact): void {
    contact.accountId = this.id;
    this.contacts.push(contact);
  }
}
