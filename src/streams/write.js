import { createWriteStream } from "node:fs";
import {
  FILEDIR,
  ENCODING as encoding,
  STREAM_ERRORMSG as ERRORMSG,
  STREAM_COMPLETE as COMPLETEMSG,
} from "../utils/constants.js";
import { EOL } from "node:os";
import { createFilePath, toGreen } from "../utils/utils.js";

const FILENAME = "fileToWrite.txt";
const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const write = async () => {
  const stream = createWriteStream(path, { encoding });
  process.stdin.on("data", (chunk) => {
    stream.write(chunk);
  });

  stream.on("end", () => {
    console.log(EOL, toGreen(COMPLETEMSG));
  });

  stream.on("error", () => {
    console.error(ERRORMSG);
  });
};

await write();
