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
  logo_name: "",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

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
