import { Contact } from "@contact/mod.ts";
import { IRepository } from "@storage/mod.ts";

import { Account } from "@account/model.ts";

export interface AccountConstructorParams {
  id: string;
  name: string;
  contacts?: Contact[];
}

export interface IAccountRepository extends IRepository<Account> {}
