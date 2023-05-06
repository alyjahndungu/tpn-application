import Router from "next/router";
import cookie from "js-cookie";
import { get } from "./api";
export const app = {
  endpoint: "http://localhost:8088/api",
};

export const login = async ({ token, userId }: any) => {
  cookie.remove("token");
  cookie.set("token", token, { expires: 7 });
  cookie.set("user_id", userId);
};

export const getUserDetails = async ({userId} : any) => {
  await get(`/users/${userId}`)
    .then((response) => {
      {
        if (response.role === "ADMIN") {
          Router.push("/admin/dashboard");
        }

        if (response.role === "USER") {
          Router.push("/main/dashboard");
        }
        console.log(response);
      }
    })
    .catch((err) => {
      {
        console.log(err);
      }
    });
};

export const accessToken = () => {
  if (typeof window !== "undefined") {
    if (cookie.get("token") == null || cookie.get("token") === "null") {
      Router.push("/sign-in");
    } else {
      const token = cookie.get("token");
      return token;
    }
  }
  return null;
};

export const getUserId = () => {
  if (typeof window !== "undefined") {
    if (cookie.get("user_id") == null || cookie.get("user_id") === "null") {
    } else {
      const userId = cookie.get("user_id");
      return userId;
    }
  }
  return null;
};

export const logout = () => {
  if (typeof window !== "undefined") {
    cookie.get("token", null);
    cookie.remove("token");
    Router.push("/sign-in");
  }
};

export function loginRequired() {
  if (typeof window !== "undefined") {
    if (cookie.get("token") == null || cookie.get("token") === "null") {
      Router.push("/sign-in");
    }
  }
}
