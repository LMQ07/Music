import request from "@/utils/request";

export const getHotWordsList = (params) =>
  request({
    url: "/search/hot",
    params,
  });
export const getAboutSongList = (params) =>
  request({
    url: "/cloudsearch",
    params,
  });
