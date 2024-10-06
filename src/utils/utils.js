import path from "node:path";

export const isTrue = () => true;
export const isFalse = () => false;

export const createPathName = (__filename, ...args) => {
  const name = path.dirname(__filename);
  return path.join(name, ...args);
};
