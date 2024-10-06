import { writeFile } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";

const FILEDIR = "files";
const FILENAME = "fresh.txt";
const CONTENT = "I am fresh and young";
const ERRORMSG = "fs operation failed";
const flag = "wx";

const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const create = async () => {
  try {
    await writeFile(path, CONTENT, { flag });
  } catch {
    throw new Error(ERRORMSG);
  }
};

await create();
