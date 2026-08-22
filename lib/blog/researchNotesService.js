import { apiFetch } from "./apiClient.js";

export async function fetchResearchNotesAdmin() {
  const { notes } = await apiFetch("/api/research-notes");
  return notes || [];
}

export async function createResearchNote(payload) {
  const { note } = await apiFetch("/api/research-notes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return note;
}

export async function updateResearchNote(payload) {
  const { note } = await apiFetch(`/api/research-notes/${encodeURIComponent(payload.id)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
  return note;
}

export async function deleteResearchNote(id) {
  await apiFetch(`/api/research-notes/${encodeURIComponent(id)}`, { method: "DELETE" });
}
