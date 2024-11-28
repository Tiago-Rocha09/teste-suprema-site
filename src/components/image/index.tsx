import Image from "next/image";

export const ImageComponent = ({ src }: { src: string }) => {
  console.log({ src });

  return (
    <Image
      src={src}
      alt="Imagem Site"
      width={1980}
      height={1080}
      className="max-w-full rounded-2xl"
    />
  );
};
