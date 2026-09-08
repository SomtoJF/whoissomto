import type { MetadataRoute } from "next";
import { getNotes } from "@/lib/notes/github";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getNotes();

  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/blog` },
    ...notes.map((note) => ({
      url: `${SITE_URL}/blog/${note.slug}`,
      ...(note.date ? { lastModified: note.date } : {}),
    })),
  ];
}
