interface ISkillsDataProps {
  id: number;
  title: string;
}

interface IProjectsDataProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

export const skillsData: ISkillsDataProps[] = [
  {
    id: 1,
    title: 'HTML5',
  },
  {
    id: 2,
    title: 'CSS3',
  },
  {
    id: 3,
    title: 'LESS',
  },
  {
    id: 4,
    title: 'SASS',
  },
  {
    id: 5,
    title: 'TailwindCSS',
  },
  {
    id: 6,
    title: 'JavaScript',
  },
  {
    id: 7,
    title: 'TypeScript',
  },
  {
    id: 8,
    title: 'React',
  },
  {
    id: 9,
    title: 'Next.js',
  },
  {
    id: 10,
    title: 'Git',
  },
  {
    id: 11,
    title: 'GitHub',
  },
  {
    id: 12,
    title: 'Bitbucket',
  },
  {
    id: 13,
    title: 'Jira',
  },
  {
    id: 14,
    title: 'ClickUp',
  },
];

export const projectsData: IProjectsDataProps[] = [
  {
    id: 1,
    title: 'Amazon UI Clone',
    description:
      'A simple Amazon UI clone built with React JS and deployed by using Firebase. This covers only the homepage of Amazon UI.',
    link: 'https://my--clone-f12e4.web.app/',
  },
  {
    id: 2,
    title: 'Netflix UI Clone',
    description:
      'A simple Netflix UI clone built with React JS and deployed by using Firebase. This clone app covers only the homepage of Netflix UI.',
    link: 'https://netflix-clone-f8bab.web.app/',
  },
  {
    id: 3,
    title: 'eFishery Frontend Engineer Test',
    description:
      'A simple Table Dashboard of dummy Fish Prices data in Indonesia, built with React JS and deployed by using Vercel.',
    link: 'https://frontend-task-efishery.vercel.app/',
  },
  {
    id: 4,
    title: 'Triasse Frontend Developer Test',
    description:
      'A simple homepage and detail page of company website, built with React JS and deployed by using Firebase.',
    link: 'https://frontend-dev-test-triasse.web.app/',
  },
];
