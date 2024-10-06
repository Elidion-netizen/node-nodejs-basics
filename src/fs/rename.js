import { rename as re } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";
import { FP_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";

const OLDFILENAME = "wrongFilename.txt";
const NEWFILENAME = "properFilename.md";

const oldName = createFilePath(import.meta.url, FILEDIR, OLDFILENAME);
const newName = createFilePath(import.meta.url, FILEDIR, NEWFILENAME);

const rename = async () => {
  try {
    await re(oldName, newName);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await rename();
