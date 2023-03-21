import { Contact } from "@domain/contact/entity.ts";
import { IStorage } from "@infrastructure/storage/mod.ts";

import { BaseRepository } from "@infrastructure/repositories/base.repository.ts";
import { IContactRepository } from "@infrastructure/repositories/typings.d.ts";

export class ContactRepository extends BaseRepository<Contact> implements IContactRepository {
  constructor(storage: IStorage<Contact>) {
    super(storage);
  }
}
