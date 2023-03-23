export { LocalStorage } from "@infrastructure/storage/localstorage.ts";
export { MemoryStorage } from "@infrastructure/storage/memory.ts";
export { FileStorage } from "@infrastructure/storage/filesystem.ts";

export type {
  Id,
  Identifiable,
  IStorage,
  ContactStorage,
  AccountStorage,
} from "@infrastructure/storage/typings.d.ts";
