import { atom } from "recoil";
export const userOption = atom({
  key: "userOption", // unique ID (with respect to other atoms/selectors)
  default: {
    optionId1: 0,
    optionId2: 0,
    optionId3: 0,
  }, // default value (aka initial value)
});
