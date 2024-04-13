import { AWSWriterWrapper } from "./class/AWSWriterWrapper";
import { DiskWriter } from "./class/DiskWriter";
import { Writer } from "./class/Writer";

let size = 1000;

if (size < 1000) {
  const writer = new Writer(new DiskWriter());
  writer.write("file path coms here");
} else {
  const writer = new Writer(new AWSWriterWrapper());
  writer.write(undefined);
}
