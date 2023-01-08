import { ObjectWithUnknownKeysType } from "../types";

const isObjectEmpty = (obj: ObjectWithUnknownKeysType) => {
  return Object.keys(obj).length === 0;
};

export { isObjectEmpty };
