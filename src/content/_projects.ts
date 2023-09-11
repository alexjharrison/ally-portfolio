export type Project = {
    title: string,
    slug: string
    description: string,
    type: 'Case Study' | 'Persona' | 'User Journey',
    tags: readonly string[],
    img?: string,
    imgAlt?: string
}

export const projects = [
    {
        title: "Henry",
        slug: "henry",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
        type: "Case Study",
        tags: ["1", "2", "3"],
    },
    {
        title: "Open Companies List",
        slug: "open-companies-list",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
        type: "Case Study",
        tags: [
            "tag 1",
            "tag 2",
            "tag 3",
        ]
    },
    {
        title: "Quest Card Sort",
        slug: "quest-card-sort",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
        type: "Case Study",
        tags: [
            "tag 1",
            "tag 2",
            "tag 3",
        ]
    },
    {
        title: "DevX",
        slug: "devx",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
        type: "Persona",
        tags: [
            "tag 1",
            "tag 2",
            "tag 3",
        ]
    },
    {
        title: "Tax Notices",
        slug: "tax-notices",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolore quaerat soluta quos et id delectus maiores ullam optio exercitationem?",
        type: "User Journey",
        tags: [
            "tag 1",
            "tag 2",
            "tag 3",
        ]
    },
] as const satisfies readonly Project[]

