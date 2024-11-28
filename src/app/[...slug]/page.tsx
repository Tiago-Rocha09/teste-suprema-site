import { renderComponent } from "@/components/renderComponent";
import pageService from "@/services/page";
import { Section } from "@/types/page";

type PageFormProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: PageFormProps) {
  const pageParams = await params;
  const slug = pageParams.slug[pageParams.slug.length - 1] || "home";
  const pageContent = await pageService.getPageContent(slug);

  return (
    <>
      {pageContent.section.map((section: Section) => (
        <div key={section.id}>{renderComponent(section.component)}</div>
      ))}
    </>
  );
}
