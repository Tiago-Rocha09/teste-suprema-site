import React from "react";

interface TextComponentProps extends React.HTMLAttributes<HTMLElement> {
  text: string | null;
}

export const TextComponent: React.FC<TextComponentProps> = ({
  text,
  ...props
}) => {
  return (
    <section {...props}>
      <p dangerouslySetInnerHTML={{ __html: text || "" }} />
    </section>
  );
};
