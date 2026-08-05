import { getProjectMetadata, ProjectDetailPage } from "@/components/ProjectDetailPage";

export const metadata = getProjectMetadata("riverside-apartment");

export default function Page() {
  return <ProjectDetailPage slug="riverside-apartment" />;
}
