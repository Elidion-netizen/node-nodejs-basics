import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";
import { STREAM_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";
import { createFilePath } from "../utils/utils.js";

const SOURCEFILE = "archive.gz";
const RESULTFILE = "fileToCompress.txt";

const sourcePath = createFilePath(import.meta.url, FILEDIR, SOURCEFILE);
const destPath = createFilePath(import.meta.url, FILEDIR, RESULTFILE);

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(sourcePath),
      createGunzip(),
      createWriteStream(destPath)
    );
    await unlink(sourcePath);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await decompress();
