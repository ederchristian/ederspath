type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ederspath+website@gmail.com",
  title: "Hey, welcome to Eder's Path.",
  // profile: "/profile.webp",
  description: "Chasing progress, embracing the process.",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@ederspath",
    },
    {
      label: "X",
      link: "https://x.com/ederspath",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/ederspath",
    },
    {
      label: "Substack",
      link: "https://ederspath.substack.com",
    },
  ],
};

export default presentation;
