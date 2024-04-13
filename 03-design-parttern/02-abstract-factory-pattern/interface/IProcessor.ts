import { IStorage } from "./IStorage";

export interface IProcessor {
  attachStorage(storage: IStorage): string;

  showSpec(): string;
}
