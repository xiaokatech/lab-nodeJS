import { ILaptopFactory } from "./interface/ILaptopFactory";
import { IProcessor } from "./interface/IProcessor";

export const buildLaptop = (laptopFactory: ILaptopFactory): IProcessor => {
  const processor = laptopFactory.createProcessor();

  const storage = laptopFactory.createStorage();

  processor.attachStorage(storage);

  return processor;
};
