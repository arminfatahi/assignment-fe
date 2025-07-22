import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import { User } from "@/lib/Types";

const filePath = "src/mock/users.json";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await delay(1000);

  if (req.method === "DELETE") {
    try {
      await fs.writeFile(filePath, JSON.stringify({} as User, null, 2), "utf8");
      res.status(200).json({ success: true });
    } catch {
      res.status(500).json({ error: "Failed to remove user" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
