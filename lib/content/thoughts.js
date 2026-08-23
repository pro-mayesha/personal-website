import { getPublishedNotes, researchNotes as staticResearchNotes } from "./notes";

export function researchNoteAsThought(note) {
  return {
    ...note,
    thoughtCategory: note.category,
    href: `/notes/${note.slug}`,
  };
}

export function mergeThoughtArchive(personalPosts = [], research = staticResearchNotes) {
  const published = getPublishedNotes(research).map(researchNoteAsThought);
  const bySlug = new Map();
  for (const post of [...published, ...personalPosts]) {
    if (post?.slug) bySlug.set(post.slug, post);
  }
  return [...bySlug.values()];
}
