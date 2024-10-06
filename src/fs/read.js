import { readFile } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";
import { FP_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";

const FILENAME = "fileToRead.txt";

const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const read = async () => {
  try {
    const content = await readFile(path, {
      encoding: "utf8",
    });
    console.log(content);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await read();
