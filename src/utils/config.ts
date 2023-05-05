import Router from "next/router";
import cookie from "js-cookie";
export const app = {
  endpoint: "http://localhost:8088/api",
};

export const login = ({ token }: any) => {
  cookie.set("token", token, { expires: 7 });
  // Router.push("/home");
};

export const accessToken = () => {
  if (typeof window !== "undefined") {
    if (cookie.get("token") == null || cookie.get("token") === "null") {
      Router.push("/sign-in");
    } else {
      const token = cookie.get("token");
      return `Bearer ${token}`;
    }
  }
  return null;
};

export const logout = () => {
  if (typeof window !== "undefined") {
    cookie.get("token", null);
    cookie.remove("token");
    Router.push("/signin");
  }
};

export function loginRequired() {
  if (typeof window !== "undefined") {
    if (cookie.get("token") == null || cookie.get("token") === "null") {
      Router.push("/signin");
    }
  }
}
