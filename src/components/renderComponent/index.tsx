import { Component } from "@/types/page";
import { BannerComponent } from "../banner";
import { GridComponent } from "../grid";
import { ImageComponent } from "../image";
import { TextComponent } from "../text";

export const renderComponent = (component: Component) => {

  switch (component.type) {
    case "text":
      return (
        <section className="container mx-auto pb-8 relative h-full flex items-center pl-4">
          <TextComponent text={component.value} />
        </section>
      );
    case "richText":
      return (
        <section className="container mx-auto pb-8 relative  h-full flex items-center pl-4">
          <TextComponent text={component.value} />
        </section>
      );
    case "image":
      return (
        <section className="container mx-auto pb-8 relative  h-full flex items-center">
          <ImageComponent src={component.value || ""} />
        </section>
      );
    case "grid":
      return (
        <section className="container mx-auto pb-8 relative  h-full flex items-center">
          <GridComponent components={component.children || []} />
        </section>
      );
    case "banner":
      return (
        <section className="pb-8 relative h-full flex items-center">
          <BannerComponent components={component.children || []} />
        </section>
      );
    default:
      return null;
  }
};
