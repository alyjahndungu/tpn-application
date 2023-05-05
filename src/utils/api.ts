import axios from "axios";
import { accessToken, app } from "./config";

export const get = async (urlSuffix: string) => {
  const res = await fetch(app.endpoint + urlSuffix, {
    method: "GET",
    headers: {
      Authorization: accessToken(),
    },
  });

  return res.json();
};

export const openGet = async (urlSuffix: string) => {
  const res = await fetch(app.endpoint + urlSuffix, {
    method: "GET",
  });

  return res.json();
};

export const openPost = async (urlSuffix: string, postData: any) => {
  const res = await fetch(app.endpoint + urlSuffix, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json",
    },
  });

  return res.json();
};

export const post = async (
  urlSuffix: string,
  postData: Record<string, any>
) => {
  const res = await axios({
    method: "POST",
    url: app.endpoint + urlSuffix,
    data: postData,
    headers: {
      Authorization: accessToken(),
    },
  });

  return res.data;
};

export const patch = async (
  urlSuffix: string,
  postData: Record<string, any>
) => {
  const res = await axios({
    method: "patch",
    url: app.endpoint + urlSuffix,
    data: postData,
    headers: {
      Authorization: accessToken(),
    },
  });

  return res.data;
};
