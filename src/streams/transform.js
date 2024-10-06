import { Transform, pipeline } from "node:stream";
import { EOL } from "node:os";
import { STREAM_ERRORMSG as ERRORMSG } from "../utils/constants.js";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk
        .toString()
        .replace(EOL, "")
        .split("")
        .reverse()
        .join("")
        .concat(EOL);
      callback(null, reversed);
    },
  });

  pipeline(process.stdin, reverseString, process.stdout, (err) => {
    if (err) console.error(ERRORMSG, err);
  });
};
await transform();
