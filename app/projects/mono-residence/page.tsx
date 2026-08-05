import { getProjectMetadata, ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata = getProjectMetadata("mono-residence");

export default function Page() {
  return <ProjectDetailPage slug="mono-residence" />;
}
