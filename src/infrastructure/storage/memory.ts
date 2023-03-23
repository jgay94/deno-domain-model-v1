import { Id, Identifiable, IStorage } from "@infrastructure/storage/typings.d.ts";

export class MemoryStorage<T extends Identifiable> implements IStorage<T> {
  private storage: Map<Id, T>;

  constructor() {
    this.storage = new Map<Id, T>();
  }

  public getAll(): Promise<T[]> {
    return Promise.resolve(Array.from(this.storage.values()));
  }

  public getById(id: Id): Promise<T | null> {
    return Promise.resolve(this.storage.get(id) || null);
  }

  public create(item: T): Promise<T> {
    this.storage.set(item.id, item);
    return Promise.resolve(item);
  }

  public update(id: Id, item: T): Promise<T | null> {
    if (!this.storage.has(id)) {
      return Promise.resolve(null);
    }
    this.storage.set(id, item);
    return Promise.resolve(item);
  }

  public upsert(item: T): Promise<T> {
    this.storage.set(item.id, item);
    return Promise.resolve(item);
  }

  public delete(id: Id): Promise<boolean> {
    return Promise.resolve(this.storage.delete(id));
  }
}
