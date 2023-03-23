import { Id, Identifiable, IStorage } from "@infrastructure/storage/mod.ts";

import { IRepository } from "@infrastructure/repositories/typings.d.ts";

export abstract class BaseRepository<T extends Identifiable> implements IRepository<T> {
  constructor(protected readonly storage: IStorage<T>) {}

  public getAll(): Promise<T[]> {
    return this.storage.getAll();
  }

  public getById(id: Id): Promise<T | null> {
    return this.storage.getById(id);
  }

  public create(item: T): Promise<T> {
    return this.storage.create(item);
  }

  public update(id: Id, item: T): Promise<T | null> {
    return this.storage.update(id, item);
  }
  
  public upsert(item: T): Promise<T> {
    return this.storage.upsert(item);
  }

  public delete(id: Id): Promise<boolean> {
    return this.storage.delete(id);
  }
}
