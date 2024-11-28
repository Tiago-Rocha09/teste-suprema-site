import { Child } from "@/types/page";
import { renderComponent } from "../renderComponent";

export const GridComponent = ({ components }: { components: Child[] }) => {
  console.log(components);

  return (
    <>
      <section
        className={`grid gap-4 grid-cols-1 lg:grid-flow-col lg:grid-cols-2 p-4`}
      >
        {components.map((child) => (
          <div key={child.id}>{renderComponent(child.component)}</div>
        ))}
      </section>
    </>
  );
};
