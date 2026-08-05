import { getProjectMetadata, ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata = getProjectMetadata("forest-house");

export default function Page() {
  return <ProjectDetailPage slug="forest-house" />;
}
