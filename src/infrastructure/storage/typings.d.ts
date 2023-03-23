import { Contact } from "@domain/contact/mod.ts";
import { Account } from "@domain/account/mod.ts";

export type Id = string;

export interface Identifiable {
  id: Id;
}

export interface IStorage<T extends Identifiable> {
  getAll(): Promise<T[]>;
  getById(id: Id): Promise<T | null>;
  create(item: T): Promise<T>;
  update(id: Id, item: T): Promise<T | null>;
  upsert(item: T): Promise<T>;
  delete(id: Id): Promise<boolean>;
}

export type ContactStorage = IStorage<Contact>;

export type AccountStorage = IStorage<Account>;