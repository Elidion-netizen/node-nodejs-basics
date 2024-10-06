import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createPathName } from "../utils/utils.js";

const __filename = fileURLToPath(import.meta.url);
const path = createPathName(__filename, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(path, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("fs operation failed");
  }
};

await create();
