import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { unlink } from "node:fs/promises";
import { createGzip } from "node:zlib";
import { STREAM_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";
import { createFilePath } from "../utils/utils.js";

const SOURCEFILE = "fileToCompress.txt";
const RESULTFILE = "archive.gz";

const sourcePath = createFilePath(import.meta.url, FILEDIR, SOURCEFILE);
const destPath = createFilePath(import.meta.url, FILEDIR, RESULTFILE);

const compress = async () => {
  try {
    await pipeline(
      createReadStream(sourcePath),
      createGzip(),
      createWriteStream(destPath)
    );
    await unlink(sourcePath);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await compress();
