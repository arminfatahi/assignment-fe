import { apiFetch } from "../../service/api";
import { User } from "../model";

export const UserService = {
  async addUser(user: User): Promise<boolean> {
    try {
      await apiFetch("/api/user", {
        method: "POST",
        body: JSON.stringify(user),
      });
      return true;
    } catch {
      return false;
    }
  },

  async getUser(): Promise<User | null> {
    try {
      const user = await apiFetch<User>("/api/user");
      return user;
    } catch {
      return null;
    }
  },

  async removeUser(): Promise<boolean> {
    try {
      await apiFetch("/api/user", {
        method: "DELETE",
      });
      return true;
    } catch {
      return false;
    }
  },
};
