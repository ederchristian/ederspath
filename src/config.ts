import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ederspath.com",
  author: "Eder Christian",
  profile: "https://ederchristian.com/",
  desc: "My learn in public path.",
  title: "Eder's Path",
  ogImage: "eders-path-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ederchristian",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/ederspath",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ederspath",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ederchristian92",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },

  {
    name: "YouTube",
    href: "https://youtube.com/@ederspath",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://codepen.com/ederchristian",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:ederspath@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
