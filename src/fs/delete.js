import { unlink } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";
import { FP_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";

const FILENAME = "fileToRemove.txt";

const fileToRemove = createFilePath(import.meta.url, FILEDIR, FILENAME);

const remove = async () => {
  try {
    await unlink(fileToRemove);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await remove();
