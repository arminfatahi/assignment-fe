import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import { User } from "@/shared/types";

const filePath = "src/mock/users.json";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await delay(1000);

  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const user: User = JSON.parse(data);
      res.status(200).json(user);
    } catch {
      res.status(500).json({ error: "Failed to read user" });
    }
  } else if (req.method === "POST") {
    try {
      const user: User = req.body;
      await fs.writeFile(filePath, JSON.stringify(user, null, 2), "utf8");
      res.status(200).json({ success: true });
    } catch {
      res.status(500).json({ error: "Failed to add user" });
    }
  } else if (req.method === "DELETE") {
    try {
      await fs.writeFile(filePath, JSON.stringify({}, null, 2), "utf8");
      res.status(200).json({ success: true });
    } catch {
      res.status(500).json({ error: "Failed to remove user" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
