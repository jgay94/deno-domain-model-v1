import { ContactRepository } from "@infrastructure/repositories/mod.ts";
import { Contact } from "@domain/contact/mod.ts";

import { BaseService } from "@application/services/base.service.ts";
import { IContactService } from "@application/services/typings.d.ts";

interface Dependencies {
  contactRepository: ContactRepository;
}

export class ContactService extends BaseService<Contact> implements IContactService {
  protected readonly contactRepository: ContactRepository;

  constructor({ contactRepository }: Dependencies) {
    super(contactRepository);
    this.contactRepository = contactRepository;
  }
}
