// Single source of truth for every project — the homepage cards and the
// dynamic /projects/[slug] detail pages both read from this array.
//
// `description` items are plain strings by default. An item can also be
// `{ html: "..." }` when a paragraph needs an inline link (see "textbot"
// below) — the detail page renders those with dangerouslySetInnerHTML since
// this is our own authored content, not user input.

export const projects = [
  {
    slug: "cork",
    name: "Cork Admin",
    tagline: "Bootsrap 5 Admin Dashboard Template",
    image: "/images/cork-dash.png",
    imageWidth: 1594,
    imageHeight: 1195,
    viewUrl: "https://designreset.com/cork-admin/",
    githubUrl: null,
    skills: ["HTML", "SCSS", "Javascript", "Bootstrap 5", "Laravel", "Gulp", "Vite"],
    baseLikes: 24,
    description: [
      "Cork is a powerful CRM admin dashboard template based on Bootstrap and Sass for all kind of back-end projects. It comes with bunch of working JavaScript apps to build your next back-end application with ease.",
      "Our CRM Admin theme contains collection of well-designed demos that will save you a lot of time and effort by not having to start from scratch. Cork Admin also comes with multitude of reusable components such as buttons, maps, charts, widgets, forms, tables and bunch of elements that you can include in your project. The design is responsive and is 100% adapted to mobile devices of all sizes.",
      "With its applications, components and pages included - Cork Admin template is an excellent starting point for your next project.",
    ],
  },
  {
    slug: "equation",
    name: "Equation Admin",
    tagline: "Bootsrap 5 Admin Dashboard Template",
    image: "/images/equation-admin.png",
    imageWidth: 1920,
    imageHeight: 1440,
    viewUrl: "https://designreset.com/equation/",
    githubUrl: null,
    skills: ["HTML", "SCSS", "Javascript", "Bootstrap 5", "Gulp"],
    baseLikes: 18,
    description: [
      "Equation Admin template is a responsive web application built with Bootstrap 5. It includes highly customizable UI kits, Components, Widgets, Modules, Charts, and Applications for you to design interfaces and powerful web applications.",
      "The product contains HTML, CSS, Sass, and JS files along with the most popular built tool Gulp. It helps you easily compile and minify your Css and Js files.",
      "The template has been designed using the latest coding and design standards, as it fits all kinds of requirements with endless useful add-ons. It is very flexible and easy to use, compatible with all modern browsers, and looks clean on all devices.",
    ],
  },
  {
    slug: "textbot",
    name: "TextBot",
    tagline: "Visual Workflow Builder",
    image: "/images/textbot-client.png",
    imageWidth: 1182,
    imageHeight: 886,
    viewUrl: "https://yusufzai.github.io/textbot-v3/",
    githubUrl: "https://github.com/Yusufzai/textbot-v3.git",
    skills: ["Javascript", "Drawflow.js", "Bootstrap"],
    baseLikes: 31,
    description: [
      {
        html: 'Built the complete front end for TextBot\'s visual workflow builder, using HTML, CSS, Bootstrap, and JavaScript, including a drag-and-drop node editor <a href="https://jerosoler.github.io/Drawflow/" target="_blank" rel="noopener" class="text-blue-500">(Drawflow.js)</a> supporting triggers, conditional branching, variables, HTTP requests, and JSON import/export. Enabled users to automate complex messaging workflows without writing code.',
      },
      {
        html: 'Github - <a href="https://github.com/Yusufzai/textbot-v2.git" target="_blank" rel="noopener" class="text-blue-400">TextBot-2</a>',
      },
      {
        html: 'Live Preview - <a href="https://yusufzai.github.io/textbot-v2/" target="_blank" rel="noopener" class="text-blue-400">TextBot-2</a>',
      },
      {
        html: 'Github - <a href="https://github.com/Yusufzai/textbot-v1.git" target="_blank" rel="noopener" class="text-blue-400">TextBot-1</a>',
      },
      {
        html: 'Live Preview - <a href="https://yusufzai.github.io/textbot-v1/" target="_blank" rel="noopener" class="text-blue-400">TextBot-1</a>',
      },
    ],
  },
  {
    slug: "fuji",
    name: "Fuji Portfolio",
    tagline: "Elegant & Modern Portfolio Template",
    image: "/images/fuji-portfolio.png",
    imageWidth: 888,
    imageHeight: 667,
    viewUrl: "https://designreset.com/fuji/",
    githubUrl: null,
    skills: ["HTML", "Tailwind CSS", "JavaScript"],
    baseLikes: 27,
    description: [
      "Fuji is a personal portfolio template built with Tailwind CSS, designed for creatives and professionals who want a sleek, modern way to showcase their work online. It comes with four distinct demo styles — Particles Dark, Particles Light, Wave Dark, and Wave Light — so you can pick the visual mood that fits your brand, from bold and animated to clean and minimal.",
      "Built entirely with HTML, CSS, and JavaScript on top of Tailwind's utility-first framework, Fuji is lightweight, fast, and easy to customize without wrestling with a bloated codebase. Whether you're a designer, developer, or freelancer, Fuji gives you a stylish, classy foundation to present your work and set yourself apart.",
    ],
  },
  {
    slug: "hippo",
    name: "Hippo Portfolio",
    tagline: "Personal Portfolio Template",
    image: "/images/hippo-portfolio.png",
    imageWidth: 1087,
    imageHeight: 815,
    viewUrl: "https://designreset.com/hippo/",
    githubUrl: null,
    skills: ["HTML", "Tailwind CSS", "JavaScript"],
    baseLikes: 21,
    description: [
      "Hippo is a feature-rich personal portfolio template built with Tailwind CSS, designed for freelancers and professionals who want a complete, all-in-one site to showcase their work, skills, and services. Where Fuji leans minimal, Hippo is the fuller-featured option — built around a multi-section, single-page layout that covers everything from introduction to contact.",
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
