import os from "os";
import { Worker } from "worker_threads";
import { createFilePath } from "../utils/utils.js";

const FILENAME = "worker.js";
const STARTNUMBER = 10;
const sorcePath = createFilePath(import.meta.url, FILENAME);

const performCalculations = async () => {
  const length = os.cpus().length;
  const promises = Array.from(
    { length },
    (_, i) =>
      new Promise((resolve, reject) =>
        new Worker(sorcePath, { workerData: i + STARTNUMBER })
          .on("message", (data) => resolve({ status: "resolved", data }))
          .on("error", () => reject({ status: "error", data: null }))
      )
  );

  Promise.all(promises).then(console.log);
};

await performCalculations();
