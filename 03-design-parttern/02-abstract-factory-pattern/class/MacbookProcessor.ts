import { IProcessor } from "../interface/IProcessor";
import { IStorage } from "../interface/IStorage";

export class MacbookProcessor implements IProcessor {
  storage: string | undefined;

  attachStorage(storageAttached: IStorage): string {
    this.storage = storageAttached.getStorageType();
    console.log(`storageAttached ${storageAttached.getStorageType()}`);
    return `${this.storage} Attached to Macbook`;
  }

  showSpec(): string {
    return this.toString();
  }

  private toString(): string {
    return "AppleProcessor is created using Apple Silicon and " + this.storage;
  }
}
