import { readdir } from "node:fs/promises";
import { createFilePath } from "../utils/utils.js";
import { FP_ERRORMSG as ERRORMSG, FILEDIR } from "../utils/constants.js";

const path = createFilePath(import.meta.url, FILEDIR);

const list = async () => {
  try {
    const items = await readdir(path, { withFileTypes: true });

    console.log(
      items.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name)
    );
  } catch {
    throw new Error(ERRORMSG);
  }
};

await list();
