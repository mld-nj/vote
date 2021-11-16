import axios from "axios";
const baseUrl = "http://localhost:8080/";
const request = axios.create({ baseURL: baseUrl });
export const getAllChannels = () => {
  return request.get("/allChannel");
};
export const getChannels = (channelId: number) => {
  return request.get("/channel", {
    params: { channelId },
  });
};
export const getOptions = (channelId: number) => {
  return request.get("/option", {
    params: { channelId },
  });
};
export const login = (username: any, password: any) => {
  return request.post(
    "/login",
    {
      username,
      password,
    }
    // {
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // }
  );
};
export const postOptions = (
  optionId1: number,
  optionId2: number,
  optionId3: number
) => {
  return request.get("vote", {
    params: {
      optionId1,
      optionId2,
      optionId3,
    },
  });
};
