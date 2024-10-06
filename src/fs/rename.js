import { rename as re } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";

const FILEDIR = "files";
const OLDFILENAME = "wrongFilename.txt";
const NEWFILENAME = "properFilename.md";
const ERRORMSG = "FS operation failed";
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
