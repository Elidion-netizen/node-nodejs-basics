import { createWriteStream } from "node:fs";
import {
  FILEDIR,
  ENCODING as encoding,
  STREAM_ERRORMSG as ERRORMSG,
  STREAM_COMPLETE as COMPLETEMSG,
  streamActions,
} from "../utils/constants.js";
import { EOL } from "node:os";
import { createFilePath, toGreen } from "../utils/utils.js";

const FILENAME = "fileToWrite.txt";
const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const write = async () => {
  const stream = createWriteStream(path, { encoding });
  const exit = () => {
    stream.end();
    console.log(EOL, toGreen(COMPLETEMSG));
    process.exit();
  };

  process.on("SIGINT", () => {
    exit();
  });

  process.stdin
    .on(streamActions.data, (chunk) => {
      if (chunk.toString().trim().toUpperCase().includes("CLOSE")) {
        exit();
      } else {
        stream.write(chunk);
      }
    })
    .on(streamActions.error, (err) => console.error(ERRORMSG, err));
};
await write();
