import { spawn } from "node:child_process";
import { FILEDIR } from "../utils/constants.js";
import { createFilePath } from "../utils/utils.js";

const FILENAME = "script.js";
const path = createFilePath(import.meta.url, FILEDIR, FILENAME);

const spawnChildProcess = async (args) => {
  spawn("node", [path, ...args], {
    stdio: "inherit",
  });
};

spawnChildProcess([2, 3, "4"]);
