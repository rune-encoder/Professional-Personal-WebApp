import resumePhoto from "../assets/resume-photo.jpg";
import resumeFile from "../assets/resume.pdf"
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

import { BiSolidDownload } from "react-icons/bi";

const resumeContent = {
  title: "Resume",
  name: "Christian Palacios",
  imageUrl: `${resumePhoto}`,
  email: "christian-palacios@outlook.com",
  phone: "726-888-2244",
  resume: {
    icon: BiSolidDownload,
    content: "Download",
    url: `${resumeFile}`,
  },
  content: [
    {
      id: 1,
      title: "Education:",
      icon: FaGraduationCap,
      content:
        "I completed a full-stack coding BootCamp at UTSA, furthering my education in computer science. I pursued some college coursework in Pre-computer science at UTSA from January 2015 to January 2016. Unfortunately, I had to leave college at that time due to work commitments, but my educational journey began at The Academy of Global Business and Technology, where I graduated from United South High School in 2015.",
    },
    {
      id: 2,
      title: "Skills:",
      icon: FaCode,
      content:
        "In my full-stack web BootCamp experience, I've acquired a diverse skill set that includes expertise in HTML5, CSS3, JavaScript, and jQuery for front-end development. On the back-end, I've honed my skills in Express.js, Node.js, and MySQL with a solid grasp of Sequelize as an ORM. I've also become proficient in working with MongoDB and Mongoose as an ODM. For building interactive and responsive user interfaces, I've developed skillful competence in React. My knowledge extends to Progressive Web Applications (PWAs) at a beginner level and extends to GraphQL and testing tools like Jest and ViTest. My proficiency with NPM ties it all together, making me a well-rounded full-stack developer.",
    },
    {
      id: 3,
      title: "Work Experience:",
      icon: FaBriefcase,
      content:
        "With extensive experience in the automotive industry, I excel in roles that require effective communication, administrative precision, and technical expertise. As an Automotive Service Admin at Volkswagen of Alamo Heights, I streamlined interdepartmental communication and managed external service providers. In my Automotive Service Consultant roles, I provided exceptional customer service, precise administrative support, and tailored solutions for clients. I maintained up-to-date product knowledge and conducted intricate vehicle maintenance and diagnostics as an Automotive Technician, emphasizing the value of continuous learning and technical proficiency.",
    },
  ],
};

export default resumeContent;
