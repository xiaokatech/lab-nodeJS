import { IFileWriter } from "../interface/IFileWriter";

export class Writer {
  protected writer: IFileWriter;

  constructor(write: IFileWriter) {
    this.writer = write;
  }

  write(filepath: string | undefined): boolean {
    return this.writer.write(filepath);
  }
}
