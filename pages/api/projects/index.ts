import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import { Project } from "@/shared/model";

const filePath = "src/mock/projects.json";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await delay(1500);

  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const projects: Project[] = JSON.parse(data);
      res.status(200).json(projects);
    } catch {
      res.status(500).json({ error: "Failed to read projects" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
