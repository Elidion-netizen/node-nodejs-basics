import { readdir } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";

const ERRORMSG = "fs operation failed";
const path = await createFilePath(import.meta.url, "files");

const list = async () => {
  try {
    const items = await readdir(path);
    console.log(items);
  } catch {
    throw new Error(ERRORMSG);
  }
};

await list();
