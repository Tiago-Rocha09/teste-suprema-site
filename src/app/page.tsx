import { renderComponent } from "@/components/renderComponent";
import pageService from "@/services/page";
import { Section } from "@/types/page";

export default async function Home() {
  const pageContent = await pageService.getPageContent("home");

  return (
    <>
      {pageContent.section.map((section: Section) => (
        <div key={section.id}>{renderComponent(section.component)}</div>
      ))}
    </>
  );
}
