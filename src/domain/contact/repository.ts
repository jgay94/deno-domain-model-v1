import { BaseRepository } from "@domain/common/mod.ts";
import { IStorage } from "@infrastructure/storage/mod.ts";

import { Contact } from "@domain/contact/entity.ts";
import { IContactRepository } from "@domain/contact/typings.d.ts";

export class ContactRepository extends BaseRepository<Contact> implements IContactRepository {
  constructor(storage: IStorage<Contact>) {
    super(storage);
  }
}
