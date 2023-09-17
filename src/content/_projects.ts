export type Project = {
  title: string;
  slug: string;
  description: string;
  type: "Case Study" | "Persona" | "User Journey";
  tags: readonly string[];
  img?: string;
  imgAlt?: string;
};

export const projects = [
  {
    title: "Henry",
    slug: "henry",
    description:
      "Henry is some sort of something that does something or whatever",
    type: "Case Study",
    tags: ["tag 1", "2", "3"],
  },
  {
    title: "Open Companies List",
    slug: "open-companies-list",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
    type: "Case Study",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Quest Card Sort",
    slug: "quest-card-sort",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
    type: "Case Study",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "DevX",
    slug: "devx",
    description:
      "The creation of a persona for DevX, a tool that helps ADP developers use technical services for their products, by conducting interviews and surveys with different types of users.",
    type: "Persona",
    tags: ["product", "research goals", "methods"],
  },
  {
    title: "Tax Notices",
    slug: "tax-notices",
    description: "Some tax notice thing",
    type: "User Journey",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
] as const satisfies readonly Project[];
