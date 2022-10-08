/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Xhfmvls's Portfolio",
  description:
    "A Developer and also a Cyber Security student that currently has an interest in software engineering and computer security.",
  og: {
    title: "Xhfmvls's Portfolio",
    type: "website",
    url: "http://github.com/xhfmvls",
  },
};

//Home Page
const greeting = {
  title: "Vincent Pradipta",
  logo_name: "xhfmvls",
  nickname: "xhfmvls",
  subTitle:
    "A Developer and also a Cyber Security student that currently has an interest in software engineering and computer security.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/xhfmvls/xhfmvls",
  githubProfile: "https://github.com/xhfmvls",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/xhfmvls",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vincent-pradipta/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vincepradipta1357@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Back End Development",
      fileName: "developerActivity",
      skills: [
        "Develop APIs for several projects and web applications with Express, Gorilla/Mux, and Flask",
        "Build and develop databases used for projects with a variety of DBMSs like MySQL, MongoDB, and Redis",
        "Perform testing and documentation of the API's request and response with Postman",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "bxl:git",
          style: {
            backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "bxl:nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "bxl:typescript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "bxl:go-lang",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "logos:express",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "bxl:flask",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "bxl:mongodb",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "cib:redis",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "file-icons:prisma",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "cib:postman",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "projects_image",
      skills: [
        "Building mobile applications with my development knowledge on Flutter",
        "Designing the software's system, architecture, model, UI, and API specification",
        "Perform unit and end-to-end testing to ensure that the software works as expected",
        "Implementing third parties' API for the projects",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "bxl:flutter",
          style: {
            backgroundColor: "transparent",
            // color: "#E34F26",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            backgroundColor: "transparent",
            // color: "#1572B6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "akar-icons:figma-fill",
          style: {
            backgroundColor: "transparent",
            // color: "#CC6699",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "ant-design:github-filled",
          style: {
            backgroundColor: "transparent",
            // color: "#CC6699",
          },
        },
        {
          skillName: "Draw.io",
          fontAwesomeClassname: "file-icons:draw-io",
          style: {
            backgroundColor: "transparent",
            // color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Cyber Security",
      fileName: "programmer",
      skills: [
        "Implement my cyber security knowledge in application development",
        "Analyze possible threats and how to mitigate/respond to them",
        "Perform threat modeling and STRIDE analysis for a number of cases",
      ],
      softwareSkills: [
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            backgroundColor: "transparent",
            // color: "#E34F26",
          },
        },
        {
          skillName: "Wire Shark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            // color: "#1572B6",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "file-icons:nmap",
          style: {
            // color: "#CC6699",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vigil_senpai",
    },
    {
      siteName: "HackTheBox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#9fef00",
      },
      profileLink: "https://app.hackthebox.com/users/869857",
    },
    {
      siteName: "Devpost",
      iconifyClassname: "simple-icons:devpost",
      style: {
        color: "#003e54",
      },
      profileLink:
        "https://devpost.com/xhfmvls?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "BINUS University",
      subtitle: "Cyber Security Undergraduate Student",
      logo_path: "Logo Binus University.png",
      alt_name: "Binus University",
      duration: "2020 - 2024",
      descriptions: [
        "Studied in Cyber Security major.",
        "Received a 3.81 GPA in my 4th semester.",
        "Obtain 144 activity points and 30 hours of community service.",
      ],
      website_link: "https://binus.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JavaScript (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/d1674846ca3c",
      alt_name: "HackerRank",
      color_code: "#2EC866",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "freeCodeCamp",
      logo_path: "freecodecamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fccd1ba3973-59a0-44b0-aec5-a6ee0ce85f02/javascript-algorithms-and-data-structures",
      alt_name: "freeCodeCamp",
      color_code: "#0a0a23",
    },
    {
      title: "Python (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/db0503494013",
      alt_name: "HackerRank",
      color_code: "#2EC866",
    },
    {
      title: "JavaScript (Intermediate)",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/5c309f576078",
      alt_name: "HackerRank",
      color_code: "#2EC866",
    },
    {
      title: "Node (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/91060231e172",
      alt_name: "HackerRank",
      color_code: "#2EC866",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Working Experiences",
  description:
    "I'm a Developer and also a Cyber Security student at BINUS University that currently has an interest in software engineering and cyber security itself. I worked mainly as a back-end developer for several projects before and have a considerable understanding of the technical and non-technical parts of it. I'm looking for an opportunity to gain more experience and knowledge in the software engineering field.",
  header_image_path: "",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Most of my projects are web applications that I work mainly as a back end developer. I develop most of my projects with Express.js and TypeScript with other useful libraries. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
