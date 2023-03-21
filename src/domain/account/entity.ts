import { Identifiable } from "@infrastructure/storage/mod.ts";
import { Contact } from "@domain/contact/mod.ts";

import { AccountConstructorParams } from "@domain/account/typings.d.ts";

export class Account implements Identifiable {
  public readonly id: string;
  public name: string;
  private contacts: Contact[];

  constructor({
    id,
    name,
    contacts = [],
  }: AccountConstructorParams) {
    this.id = id;
    this.name = name;
    this.contacts = contacts;
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact): void {
    const existingContactIndex = this.contacts.findIndex((c) =>
      c.id === contact.id
    );
    if (existingContactIndex === -1) {
      contact.accountId = this.id;
      this.contacts.push(contact);
    } else {
      console.warn(
        `A contact with id '${contact.id}' already exists in this account.`,
      );
    }
  }

  public removeContact(contactId: string): boolean {
    const index = this.contacts.findIndex((c) => c.id === contactId);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }
}
