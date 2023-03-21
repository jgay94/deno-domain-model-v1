import { Contact } from "@domain/contact/mod.ts";
import { IRepository } from "@domain/common/mod.ts";

import { Account } from "@domain/account/entity.ts";

export interface AccountConstructorParams {
  id: string;
  name: string;
  contacts?: Contact[];
}

// deno-lint-ignore no-empty-interface
export interface IAccountRepository extends IRepository<Account> {}
