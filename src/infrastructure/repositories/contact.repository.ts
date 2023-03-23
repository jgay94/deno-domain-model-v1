import { ContactStorage } from "@infrastructure/storage/mod.ts";
import { Contact } from "@domain/contact/mod.ts";

import { BaseRepository } from "@infrastructure/repositories/base.repository.ts";
import { IContactRepository } from "@infrastructure/repositories/typings.d.ts";

interface Dependencies {
  contactStorage: ContactStorage;
}

export class ContactRepository extends BaseRepository<Contact> implements IContactRepository {
  protected readonly contactStorage: ContactStorage;

  constructor({ contactStorage }: Dependencies) {
    super(contactStorage);
    this.contactStorage = contactStorage;
  }
}
