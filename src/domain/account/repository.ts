import { BaseRepository, LocalStorage } from "@storage/mod.ts";

import { Account } from "@account/model.ts";
import { IAccountRepository } from "@account/typings.d.ts";

const DEFAULT_STORAGE_KEY = 'accounts';

export class AccountRepository extends BaseRepository<Account> implements IAccountRepository {
  constructor() {
    const storage = new LocalStorage<Account>(DEFAULT_STORAGE_KEY);
    super(storage);
  }
}
