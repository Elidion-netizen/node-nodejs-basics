import { unlink } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";

const FILEDIR = "files";
const FILENAME = "fileToRemove.txt";
const ERRORMSG = "fs operation failed";

const fileToRemove = createFilePath(import.meta.url, FILEDIR, FILENAME);

const remove = async () => {
  try {
    await unlink(fileToRemove);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await remove();
