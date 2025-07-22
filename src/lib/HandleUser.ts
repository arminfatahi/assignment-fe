import { User } from "@/lib/Types";

export async function addUser(user: User): Promise<boolean> {
  try {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function readUser(): Promise<User | null> {
  try {
    const res = await fetch("/api/user");
    if (res.ok) {
      const user = await res.json();
      return user;
    }
    return null;
  } catch {
    return null;
  }
}

export async function removeUser(): Promise<boolean> {
  try {
    const res = await fetch("/api/user/remove", { method: "DELETE" });
    return res.ok;
  } catch {
    return false;
  }
}
