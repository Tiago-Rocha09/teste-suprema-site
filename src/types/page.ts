export type Component = {
  id: string;
  type: "grid" | "text" | "richText" | "image" | "banner";
  value: string | null;
  children: Array<Child> | null;
};

export type Child = {
  id: string;
  component: Component;
};

export type Section = {
  id: string;
  component: Component;
};

export type Data = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  section: Section[];
};
