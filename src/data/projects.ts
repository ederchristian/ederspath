export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Growth Report — Be Seen, Be Valued at Work",
    techs: ["Gumroad", "Notion template"],
    link: "https://ederspath.gumroad.com/l/growth-report-be-seen-be-valued-at-work",
  },
  {
    title: "Be Seen, Be Valued at Work",
    techs: ["Gumroad", "Mini-course"],
    link: "https://ederspath.gumroad.com/l/growth-report-be-seen-be-valued-at-work",
    isComingSoon: true,
  },
  {
    title: "Eder's Path Channel",
    techs: ["YouTube"],
    link: "https://youtube.com/@ederspath",
  },
  {
    title: "Path in Focus",
    techs: ["Substack", "Free Newsletter"],
    link: "https://ederspath.substack.com",
  },
];

export default projects;
