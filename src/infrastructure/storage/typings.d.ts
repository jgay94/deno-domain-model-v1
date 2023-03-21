export interface Identifiable {
  id: string;
}

export interface IStorage<T extends Identifiable> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  upsert(item: T): Promise<T>;
}
