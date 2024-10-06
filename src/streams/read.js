import { createReadStream } from "node:fs";
import {
  FILEDIR,
  ENCODING as encoding,
  STREAM_ERRORMSG as ERRORMSG,
  STREAM_COMPLETE as COMPLETEMSG,
  streamActions,
} from "../utils/constants.js";
import { EOL } from "node:os";
import { createFilePath, toGreen } from "../utils/utils.js";

const FILENAME = "fileToRead.txt";
const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const read = async () =>
  createReadStream(path, { encoding })
    .on(streamActions.data, (chunk) => {
      process.stdout.write(chunk);
    })
    .on(streamActions.close, () => {
      console.log(EOL, toGreen(COMPLETEMSG));
    })
    .on(streamActions.error, (err) => {
      console.error(ERRORMSG, err);
    });

await read();
