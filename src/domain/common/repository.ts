import { Identifiable, IStorage } from "@infrastructure/storage/mod.ts";

import { IRepository } from "@domain/common/mod.ts";

export abstract class BaseRepository<T extends Identifiable> implements IRepository<T> {
  constructor(protected readonly storage: IStorage<T>) {}

  public getAll(): Promise<T[]> {
    return this.storage.getAll();
  }

  public getById(id: string): Promise<T | null> {
    return this.storage.getById(id);
  }

  public create(item: T): Promise<T> {
    return this.storage.create(item);
  }

  public update(id: string, item: T): Promise<T | null> {
    return this.storage.update(id, item);
  }

  public delete(id: string): Promise<boolean> {
    return this.storage.delete(id);
  }
}
