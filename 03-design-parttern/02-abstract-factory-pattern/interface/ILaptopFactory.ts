import { IProcessor } from "./IProcessor";
import { IStorage } from "./IStorage";

export interface ILaptopFactory {
  createProcessor(): IProcessor;

  createStorage(): IStorage;
}
