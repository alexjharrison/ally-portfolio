type SectionNames =
  | "Discovery Interviews"
  | "Next Steps"
  | "User Journey"
  | "Personas"
  | "Design Workshop"
  | "Usability Testing"
  | "Card Sorting"
  | "Surveys"
  | "Overview"
  | "Problem"
  | "Solution";

type Image = { src: string; alt: string; title?: string };

export type Section = {
  title: SectionNames;
  text: (string | string[])[];
  images?: Image[];
};

export type Project = {
  title: string;
  slug: string;
  teaser?: string;
  sections: SectionNames[];
  sectionDetails: Section[];
};

export const projects: Project[] = [
  {
    title: "DevX",
    slug: "devx",
    sections: ["Discovery Interviews", "Surveys", "Personas"],
    teaser:
      "Who and what is behind the various services used by developers at ADP? (And what is a “service” anyway?)",
    sectionDetails: [
      {
        title: "Overview",
        text: [
          "DevX is an internal tool to help ADP developers use services for their products. As the user researcher, my first goal was to help the non-technical members of my team understand our users and their goals. ",
        ],
      },
      {
        title: "Problem",
        text: [
          "Initially, individual services were developed in isolation, leading to a disjointed experience.  The UX team was brought in to help standardize the different services, but did not have a clear picture of exactly who was using the site, and what they were using it for.",
        ],
      },
      {
        title: "Solution",
        text: [
          "I conducted discovery research with various users of DevX to understand more about their roles, both in general and specifically related to DevX.  I created personas to use as the foundation of future design work and research plans.",
        ],
      },
      {
        title: "Surveys",
        text: [
          "I started by distributing a survey to DevX users to get a baseline of their roles, responsibilities, and general sentiments about the tool. I combined the results with information from subject matter experts to form general categories of users to be investigated further.",
        ],
      },
      {
        title: "Discovery Interviews",
        text: [
          "I conducted a series of one-on-one and small group interviews with members of the identified groups to better understand how DevX fit into their roles, and where there might be room for improvement.",
        ],
      },
      {
        title: "Personas",
        text: [
          "I combined the subjective and objective results from the discovery research to create personas that reflected the professional attributes of our users, as well as their motivations and challenges.",
        ],
      },
      {
        title: "Next Steps",
        text: [
          "ADP ultimately left the DevX site in favor of a third party system, but the personas developed for DevX are still in use when considering customizations.",
        ],
      },
    ],
  },
  // {
  //   title: "Employee Onboarding Portal",
  //   slug: "employee-onboarding-portal",
  //   sections: ["Card Sorting", "Design Workshop"],
  //   sectionDetails: [],
  // },
  {
    title: "Tax Notices",
    slug: "tax-notices",
    teaser: "What happens when an ADP client is contacted by a tax agency?",
    sections: [
      "Discovery Interviews",
      "User Journey",
      "Personas",
      "Design Workshop",
      "Usability Testing",
    ],
    sectionDetails: [
      {
        title: "Overview",
        text: [
          "I was the user researcher on a concept sprint done to kickstart a project to upgrade how ADP handles the notices sent to their clients by tax agencies. The project involved extensive discovery research to document the current state, facilitation of an ideation workshop with multiple stakeholders to make use of those findings, and an initial round of usability testing.",
        ],
      },
      {
        title: "Problem",
        text: [
          "When an ADP client gets a notice from a tax agency, it goes through a process involving multiple layers of ADP teams and technology.  Resolving a notice may take months, and mistakes can be costly.  Our goal was to improve the process to have shorter resolution times, higher accuracy, and more visibility to clients.",
        ],
      },
      {
        title: "Solution",
        text: [
          "We held a concept sprint workshop with a group of designers, developers, business stakeholders, and potential users.  Over 3 days we reviewed the current state, brainstormed ideas for improvements, and generated a plan for next steps.",
        ],
      },
      {
        title: "Discovery Interviews",
        text: [
          "Before we could start designing a new experience, we needed to hear from everyone involved in the existing process.  I conducted one-on-one interviews with ADP clients, the frontline associates working with those clients, and the behind the scenes associates processing the notices.  I learned how everyone was impacted by a notice, the steps they had to take, and what pain points they met along the way.",
        ],
      },
      {
        title: "Personas",
        text: [
          "I created personas to document the goals, sentiments, and pain points of the people involved in the process. Tax notices cross all of ADP’s normal business segments, and many of our workshop participants were only familiar with their own piece of the puzzle.  Reviewing the personas allowed us to consider all of our users during the ideation.",
        ],
      },
      {
        title: "User Journey",
        text: [
          "I created journey maps to document the entire process from a client receiving a notice through its final resolution, making note of the different technology, people, and pain points involved at each step along the way.  ",
        ],
      },
      {
        title: "Design Workshop",
        text: [
          "A group of designers, developers, business stakeholders, and potential users met for a 3 day workshop that I helped facilitate.  We reviewed what we’d learned about the current state, and went through brainstorming and prioritization exercises to generate a plan for next steps.",
        ],
      },
      {
        title: "Usability Testing",
        text: [
          "As part of the workshop, I was able to run a quick round of usability testing.  We were able to get user input on some of the ideas from early brainstorming sessions and incorporate it into later ideation exercises.",
        ],
      },
    ],
  },
  {
    title: "Open Companies Dashboard",
    slug: "open-companies-dashboard",
    sections: ["Discovery Interviews", "Usability Testing", "User Journey"],
    teaser: "What happens when an ADP client is contacted by a tax agency?",
    sectionDetails: [
      {
        title: "Overview",
        text: [
          "I was the user researcher on a concept sprint done to kickstart a project to upgrade how ADP handles the notices sent to their clients by tax agencies. The project involved extensive discovery research to document the current state, facilitation of an ideation workshop with multiple stakeholders to make use of those findings, and an initial round of usability testing.",
        ],
      },
      {
        title: "Problem",
        text: [
          "When an ADP client gets a notice from a tax agency, it goes through a process involving multiple layers of ADP teams and technology.  Resolving a notice may take months, and mistakes can be costly.  Our goal was to improve the process to have shorter resolution times, higher accuracy, and more visibility to clients.",
        ],
      },
      {
        title: "Solution",
        text: [
          "We held a concept sprint workshop with a group of designers, developers, business stakeholders, and potential users.  Over 3 days we reviewed the current state, brainstormed ideas for improvements, and generated a plan for next steps.",
        ],
      },
      {
        title: "Discovery Interviews",
        text: [
          "Before we could start designing a new experience, we needed to hear from everyone involved in the existing process.  I conducted one-on-one interviews with ADP clients, the frontline associates working with those clients, and the behind the scenes associates processing the notices.  I learned how everyone was impacted by a notice, the steps they had to take, and what pain points they met along the way.",
        ],
        images: [
          {
            src: "/assets/pictures/TaxNotices_ConceptSprint.png",
            alt: "board",
            title: "Brainstorming",
          },
        ],
      },
      {
        title: "Personas",
        text: [
          "I created personas to document the goals, sentiments, and pain points of the people involved in the process. Tax notices cross all of ADP’s normal business segments, and many of our workshop participants were only familiar with their own piece of the puzzle.  Reviewing the personas allowed us to consider all of our users during the ideation.",
          "I created personas to document the goals, sentiments, and pain points of the people involved in the process. Tax notices cross all of ADP’s normal business segments, and many of our workshop participants were only familiar with their own piece of the puzzle.  Reviewing the personas allowed us to consider all of our users during the ideation.",
        ],
      },
      {
        title: "User Journey",
        text: [
          "I created journey maps to document the entire process from a client receiving a notice through its final resolution, making note of the different technology, people, and pain points involved at each step along the way. ",
          ["bullet 1", "bullet2"],
        ],
      },
      {
        title: "Design Workshop",
        text: [
          "A group of designers, developers, business stakeholders, and potential users met for a 3 day workshop that I helped facilitate.  We reviewed what we’d learned about the current state, and went through brainstorming and prioritization exercises to generate a plan for next steps.",
        ],
      },
      {
        title: "Usability Testing",
        text: [
          "As part of the workshop, I was able to run a quick round of usability testing.  We were able to get user input on some of the ideas from early brainstorming sessions and incorporate it into later ideation exercises.",
        ],
      },
    ],
  },
];
