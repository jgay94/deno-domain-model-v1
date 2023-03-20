import { BaseRepository, LocalStorage } from "@storage/mod.ts";

import { Contact } from "@contact/model.ts";
import { IContactRepository } from "@contact/typings.d.ts";

const DEFAULT_STORAGE_KEY = 'contacts';

export class ContactRepository extends BaseRepository<Contact> implements IContactRepository {
  constructor() {
    const storage = new LocalStorage<Contact>(DEFAULT_STORAGE_KEY);
    super(storage);
  }
}
