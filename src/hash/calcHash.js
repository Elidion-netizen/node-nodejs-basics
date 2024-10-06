import { createReadStream } from "node:fs";
import crypto from "node:crypto";
import { createFilePath } from "../utils/utils.js";
import { FILEDIR, streamActions } from "../utils/constants.js";

const SOURCEFILE = "fileToCalculateHashFor.txt";
const ALGORITHM = "sha256";
const HEX = "hex";
const sourcePath = createFilePath(import.meta.url, FILEDIR, SOURCEFILE);

const calculateHash = async () => {
  const hash = crypto.createHash(ALGORITHM);

  createReadStream(sourcePath)
    .on(streamActions.data, (chunk) => {
      hash.update(chunk);
    })
    .on(streamActions.close, () => {
      const fileHash = hash.digest(HEX);
      console.log(fileHash);
    });
};

await calculateHash();
