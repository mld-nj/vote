import axios from "axios";
const baseUrl = "http://localhost:8080/";
const request = axios.create({ baseURL: baseUrl });
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
