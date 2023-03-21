import { Account } from "@domain/account/entity.ts";
import { IStorage } from "@infrastructure/storage/mod.ts";

import { BaseRepository } from "@infrastructure/repositories/base.repository.ts";
import { IAccountRepository } from "@infrastructure/repositories/typings.d.ts";

export class AccountRepository extends BaseRepository<Account> implements IAccountRepository {
  constructor(storage: IStorage<Account>) {
    super(storage);
  }
}
