import { getProjectMetadata, ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata = getProjectMetadata("atelier-04");

export default function Page() {
  return <ProjectDetailPage slug="atelier-04" />;
}
