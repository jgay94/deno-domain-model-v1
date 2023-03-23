import { Id, Identifiable } from "@infrastructure/storage/mod.ts";
import { IRepository } from "@infrastructure/repositories/mod.ts";

import { IService } from "@application/services/typings.d.ts";

export abstract class BaseService<T extends Identifiable> implements IService<T> {
  constructor(protected readonly repository: IRepository<T>) {}

  public getAll(): Promise<T[]> {
    return this.repository.getAll();
  }

  public getById(id: Id): Promise<T | null> {
    return this.repository.getById(id);
  }

  public create(input: T): Promise<T> {
    return this.repository.create(input);
  }

  public update(id: Id, input: T): Promise<T | null> {
    return this.repository.update(id, input);
  }

  public upsert(input: T): Promise<T> {
    return this.repository.upsert(input);
  }

  public delete(id: Id): Promise<boolean> {
    return this.repository.delete(id);
  }
}
