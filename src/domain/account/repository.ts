import { BaseRepository } from "@storage/mod.ts";

import { Account } from "@account/model.ts";
import { IAccountRepository } from "@account/typings.d.ts";

export class AccountRepository extends BaseRepository<Account>
  implements IAccountRepository {
  constructor() {
    super("accounts");
  }
}
