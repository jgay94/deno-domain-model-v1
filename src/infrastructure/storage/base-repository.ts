import { IRepository } from "@storage/typings.d.ts";

export abstract class BaseRepository<T> implements IRepository<T> {
  protected storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  async getById(id: string): Promise<T | null> {
    // Implement getById logic using localStorage
  }

  async getAll(): Promise<T[]> {
    // Implement getAll logic using localStorage
  }

  async create(item: T): Promise<T> {
    // Implement create logic using localStorage
  }

  async update(id: string, item: T): Promise<T | null> {
    // Implement update logic using localStorage
  }

  async delete(id: string): Promise<boolean> {
    // Implement delete logic using localStorage
  }
}
