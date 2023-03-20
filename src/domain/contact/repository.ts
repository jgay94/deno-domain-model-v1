import { BaseRepository } from "@storage/mod.ts";

import { Contact } from "@contact/model.ts";
import { IContactRepository } from "@contact/typings.d.ts";

export class ContactRepository extends BaseRepository<Contact>
  implements IContactRepository {
  constructor() {
    super("contacts");
  }
}
