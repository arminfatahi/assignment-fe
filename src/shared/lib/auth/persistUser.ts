import Cookies from "js-cookie";
import { User } from "@/shared/model";

const COOKIE_KEY = "user";

export const setUserCookie = (user: User) => {
  Cookies.set(COOKIE_KEY, JSON.stringify(user), { expires: 7 });
};

export const getUserFromCookie = (): User | null => {
  try {
    const cookie = Cookies.get(COOKIE_KEY);
    return cookie ? (JSON.parse(cookie) as User) : null;
  } catch {
    return null;
  }
};

export const removeUserCookie = () => {
  Cookies.remove(COOKIE_KEY);
};
