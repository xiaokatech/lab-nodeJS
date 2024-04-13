export interface IFileWriter {
  write(filepath: string | undefined): boolean;
}
