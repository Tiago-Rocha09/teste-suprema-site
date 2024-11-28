import Image from "next/image";
import { TextComponent } from "../text";
import { Child } from "@/types/page";

export const BannerComponent = ({ components }: { components: Child[] }) => {

  const imageComponent = components.find(
    (component) => component.component.type === "image"
  );
  const textComponent = components.find(
    (component) => component.component.type === "richText"
  );

  return (
    <>
      {imageComponent && (
        <div style={{ position: "relative" }}>
          <Image
            src={imageComponent.component.value || ""}
            alt={"Imagem banner"}
            width={1980}
            height={1080}
            className="brightness-50"
          />
          {textComponent && (
            <div className="container absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pl-4">
              <TextComponent
                text={textComponent.component.value}
                className="text-white max-w-full w-[780px]"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
