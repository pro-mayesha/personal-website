import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const dir = path.join(process.cwd(), "data");

async function readJson(filename, fallback) {
  try {
    const raw = await readFile(path.join(dir, filename), "utf8");
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function writeJson(filename, value) {
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function readFileNotes() {
  const notes = await readJson("research-notes.json", []);
  return Array.isArray(notes) ? notes : [];
}

export async function writeFileNotes(notes) {
  await writeJson("research-notes.json", notes);
}

export async function readFilePosts() {
  const posts = await readJson("posts.json", []);
  return Array.isArray(posts) ? posts : [];
}

export async function writeFilePosts(posts) {
  await writeJson("posts.json", posts);
}
