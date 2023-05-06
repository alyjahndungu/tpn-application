import Router from "next/router";
import cookie from "js-cookie";
export const app = {
  endpoint: "http://localhost:8088/api",
};

export const login = ({ token, userId }: any) => {
  cookie.set("token", token, { expires: 7 });
  cookie.set("user_id", userId);
  // Router.push("/home");
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
      Router.push("/signin");
    }
  }
}
