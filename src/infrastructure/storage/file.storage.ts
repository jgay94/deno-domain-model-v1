import { Identifiable, IStorage } from "@infrastructure/storage/typings.d.ts";

export class FileStorage<T extends Identifiable> implements IStorage<T> {
  constructor(private filePath: string) {}

  private async readData(): Promise<T[]> {
    try {
      const data = await Deno.readTextFile(this.filePath);
      return JSON.parse(data) as T[];
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return [];
      }
      throw error;
    }
  }

  private async writeData(data: T[]): Promise<void> {
    await Deno.writeTextFile(this.filePath, JSON.stringify(data));
  }

  public async getAll(): Promise<T[]> {
    return await this.readData();
  }

  public async getById(id: string): Promise<T | null> {
    const data = await this.readData();
    return data.find((item) => item.id === id) || null;
  }

  public async create(item: T): Promise<T> {
    const data = await this.readData();
    data.push(item);
    await this.writeData(data);
    return item;
  }

  public async update(id: string, item: T): Promise<T | null> {
    const data = await this.readData();
    const index = data.findIndex((existingItem) => existingItem.id === id);
    if (index === -1) return null;
    data[index] = item;
    await this.writeData(data);
    return item;
  }

  public async delete(id: string): Promise<boolean> {
    const data = await this.readData();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) return false;
    data.splice(index, 1);
    await this.writeData(data);
    return true;
  }
}
