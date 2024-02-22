/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Xhfmvls's Portfolio",
  description:
    "Cyber Security Enthusiast (and Student) with an interest in software engineering, digital forensic, and OSINT.",
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
    "Cyber Security Enthusiast (and Student) with an interest in software engineering, digital forensic, and OSINT.",
  resumeLink: "mailto:vipradiptadev@gmail.com",
  portfolio_repository: "https://github.com/xhfmvls/xhfmvls",
  githubProfile: "https://github.com/xhfmvls",
};

const socialMediaLinks = [
  {
    name: "GitHub",
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
    name: "HackerRank",
    link: "https://www.hackerrank.com/vigil_senpai",
    fontAwesomeIcon: "fa-hackerrank", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#2EC866", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Back End Development",
      fileName: "developerActivity",
      skills: [
        "Develop APIs for several projects and web applications with Express, Gorilla/Mux, and Flask",
        "Develop Microservices with several tools and Go Fiber Framework",
        "Build and develop databases used for projects with a variety of DBMSs like MySQL, MongoDB, and Redis",
        "Perform integration testing and documentation of the API's request and response with Postman and several libraries (ex. testify)",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "akar-icons:postgresql-fill",
          style: {
            backgroundColor: "transparent",
            // color: "#CC6699",
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
        {
          skillName: "Docker",
          fontAwesomeClassname: "mdi:docker",
          style: {
            backgroundColor: "transparent",
            // color: "#CC6699",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            backgroundColor: "transparent",
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
        {
          skillName: "Jira",
          fontAwesomeClassname: "mdi:jira",
          style: {
            backgroundColor: "transparent",
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
        "Received a 3.85 GPA in my 6th semester.",
        "Obtain 148 activity points and 30 hours of community service.",
        "Gain experience through Enrichment program (Internship) for two semesters.",
      ],
      website_link: "https://binus.ac.id/",
    },
  ],
};

const experience = {
  degrees: [
    {
      title: "Vuln0wned",
      subtitle: "Member (Code Analysis)",
      logo_path: "vulnowned-logo.png",
      alt_name: "Vuln0wned",
      duration: "August 2023 - Present",
      descriptions: [
        "Discovering vulnerability through code analysis.",
        "Making report of the discovered CVE.",
        "Helps other members discover vulnerabilities in the deployed applications.",
      ],
      website_link: "https://www.linkedin.com/company/vuln0wned/",
    },
    {
      title: "Asuransi Astra",
      subtitle: "IT Security Architect Intern",
      logo_path: "Asuransi-Astra.png",
      alt_name: "Asuransi Astra",
      duration: "March 2023 - February 2024",
      descriptions: [
        "Developing CMS Security for Security Awareness Program Purposes.",
        "Participating in Security Awareness Program (Which includes Phishing Simulation and Security Awareness Training).",
        "Developing scripts/tools to support security operations.",
        "Helps other security team staff to manage/process data.",
        "Assisting other security activities (Penetration Testing, Vulnerability Assessment, and Patch Management).",
      ],
      website_link: "https://www.linkedin.com/company/asuransiastra/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified AppSec Practitioner (CAP)",
      subtitle: "The SecOps Group",
      logo_path: "secops.jpg",
      certificate_link: "",
      alt_name: "The SecOps Group",
      color_code: "#ffffff",
    },
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
// const experience = {
//   title: "Experience",
//   // subtitle: "Working Experiences",
//   description:
//     "I'm a Developer and also a Cyber Security student at BINUS University that currently has an interest in software engineering and cyber security itself. I worked mainly as a back-end developer for several projects before and have a considerable understanding of the technical and non-technical parts of it. I'm looking for an opportunity to gain more experience and knowledge in the software engineering field.",
//   header_image_path: "",
//   sections: [
//     {
//       title: "Working Experience",
//       experiences: [
//         {
//           title: "Back End Developer (Intern)",
//           company: "Overo Digital Global (Soluix Group)",
//           company_url: "https://overoglobal.com/",
//           logo_path: "Overo-Logo.png",
//           duration: "October 2022 - PRESENT",
//           location: "Tangerang, Banten",
//           description:
//             "Work as a Back End Developer in an internship at PT. Overo Digital Global (Soluix Group) with Go Fiber frameworks and PostgreSQL DBMS. Work with Microservices related to banking and payment system. Perform unit and integration testing. Having paired programming sessions with co-workers.",
//           color: "#3b3b3b",
//         },
//       ],
//     },
//     {
//       title: "Hackathon",
//       experiences: [
//         {
//           title: "Statements Against Mankind",
//           company: "Snakes and Hackers 2",
//           company_url: "https://snakesandhackers2.devpost.com/",
//           logo_path: "mlh.jpeg",
//           duration: "12 August 2022 - 14 August 2022",
//           description:
//             "Statements Against Mankind is a board (card) game that is inspired by the classic game of C*rds Ag**nst H*m*ni*y. But here, the players have the access to create their own cards. This project wins the Best New Player Hacks category.",
//           color: "#3b3b3b",
//         },
//         {
//           title: "TOP G",
//           company: "A Hack A Day 2",
//           company_url: "https://devpost.com/software/top-g",
//           logo_path: "mlh.jpeg",
//           duration: "19 August 2022 - 21 August 2022",
//           description:
//             "TOP G is a web application that enables gym members (users) to find information about collaborated gyms, check in to the gym, and consultate about health and exercise with professionals.",
//           color: "#3b3b3b",
//         },
//         {
//           title: "Heart Disease EDA",
//           company: "Garuda Hacks 3.0",
//           company_url: "https://devpost.com/software/heart-disease-eda/",
//           logo_path: "garuda.png",
//           duration: "26 August 2022 - 28 August 2022",
//           description:
//             "Heart Disease EDA is a data analysis project regarding the factors that influence the occurrence of heart disease.",
//           color: "#3b3b3b",
//         },
//       ],
//     },
//   ],
// };

// Projects Page
const projectsHeader = {
  title: "Personal Projects",
  description:
    "Most of my personal projects are web applications that I work mainly as a back end developer. I develop most of my projects with Express.js and TypeScript with other useful libraries.",
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
