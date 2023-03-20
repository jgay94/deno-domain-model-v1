import { Identifiable, IRepository, IStorage } from "@storage/typings.d.ts";

export abstract class BaseRepository<T extends Identifiable> implements IRepository<T> {
  protected storage: IStorage<T>;

  constructor(storage: IStorage<T>) {
    this.storage = storage;
  }

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
