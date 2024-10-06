import { cp } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";
import { FP_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";

const NEWFILEDIR = "files_copy";

const sorcePath = await createFilePath(import.meta.url, FILEDIR);
const destPath = await createFilePath(import.meta.url, NEWFILEDIR);

const copy = async () => {
  try {
    await cp(sorcePath, destPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error(ERRORMSG);
  }
};

await copy();
