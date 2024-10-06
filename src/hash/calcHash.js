import { createReadStream } from "node:fs";
import crypto from "node:crypto";
import { createFilePath } from "../utils/utils.js";
import { FILEDIR } from "../utils/constants.js";

const SOURCEFILE = "fileToCalculateHashFor.txt";
const sourcePath = createFilePath(import.meta.url, FILEDIR, SOURCEFILE);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");

  const readStream = createReadStream(sourcePath);
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  readStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};

await calculateHash();
