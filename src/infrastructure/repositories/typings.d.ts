// deno-lint-ignore-file no-empty-interface
import { Contact } from "@domain/contact/entity.ts";
import { Account } from "@domain/account/entity.ts";

export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  upsert(item: T): Promise<T>;
}

export interface IContactRepository extends IRepository<Contact> {}

export interface IAccountRepository extends IRepository<Account> {}
