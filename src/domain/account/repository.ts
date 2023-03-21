import { BaseRepository } from "@domain/common/mod.ts";
import { IStorage } from "@infrastructure/storage/mod.ts";

import { Account } from "@domain/account/entity.ts";
import { IAccountRepository } from "@domain/account/typings.d.ts";

export class AccountRepository extends BaseRepository<Account> implements IAccountRepository {
  constructor(storage: IStorage<Account>) {
    super(storage);
  }
}
