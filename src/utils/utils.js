import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const createFilePath = (filePath, ...args) => {
  return join(dirname(fileURLToPath(filePath)), ...args);
};

export const toGreen = (str) => `\x1b[32m ${str} \x1b[0m`;
