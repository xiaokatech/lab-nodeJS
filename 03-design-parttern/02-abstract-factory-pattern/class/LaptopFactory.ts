import { ILaptopFactory } from "../interface/ILaptopFactory";
import { IProcessor } from "../interface/IProcessor";
import { IStorage } from "../interface/IStorage";
import { MacbookProcessor } from "./MacbookProcessor";
import { MacbookStorage } from "./MacbookStorage";

export class Macbook implements ILaptopFactory {
  storageSize: number;

  constructor(storageSize: number) {
    this.storageSize = storageSize;
  }

  createProcessor(): IProcessor {
    return new MacbookProcessor();
  }

  createStorage(): IStorage {
    return new MacbookStorage(this.storageSize);
  }
}
