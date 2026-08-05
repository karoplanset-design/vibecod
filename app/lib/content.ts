import content from "@/spec/site-content.json";

export const siteContent = content;
export type Project = (typeof content.projects)[number];
export type ProjectDetail = (typeof content.projectDetails)[number];

export function getProjectDetail(slug: string) {
  return siteContent.projectDetails.find((project) => project.slug === slug);
}
