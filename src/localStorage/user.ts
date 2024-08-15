import {localStorageKey} from "@/constants/localStorage";

import {storage} from ".";
import {jsonParse} from "./json";

export const getUser = () => {
  const userString = storage.getString(localStorageKey.USER) ?? "{}";
  return jsonParse(userString);
};
