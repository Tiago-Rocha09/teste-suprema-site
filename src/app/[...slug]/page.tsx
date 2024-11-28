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
  console.log(pageParams);
  const slug = pageParams.slug[pageParams.slug.length - 1] || "";
  const pageContent = await pageService.getPageContent(slug);
  console.log(pageContent);

  return (
    <>
      {pageContent.section.map((section: Section) => (
        <div key={section.id}>{renderComponent(section.component)}</div>
      ))}
    </>
  );
  return <div></div>;
}
