import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    nextjs,
    python,
    flask,
    html,
    springboot,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cost_of_living,
    edge_icon,
    connect_4,
    crypto_tracker,
    linkedin,
    gemini_clone,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    }, 
    {
      name: "Java",
      icon: java,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "SpringBoot",
      icon: springboot,
    },
    {
      name: "Next JS",
      icon: nextjs,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cost of Living Comparison 💷",
      description:
        "This project is a cost of living comparison web app that lets users input and compare expenses for two cities. It's built with HTML, CSS, and JavaScript for the frontend, and Python (Flask) for the backend, featuring responsive tables and an appealing design. Data for chosen city to compare against is generated from OpenAI",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: cost_of_living,
      source_code_link: "https://github.com/HakimM16/Cost-of-living-project-2",
      web_link: "https://cost-of-living-project.vercel.app"
    },
    {
      name: "Connect 4 🕹️",
      description:
        "This project is a Connect 4 game where players take turns dropping pieces to connect four in a row. Built with HTML, CSS, and JavaScript, it features a dynamically generated board, winner checks, and result announcements, showcasing web development and game logic skills.",
      tags: [
        {
          name: "HTML & CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
      ],
      image: connect_4,
      source_code_link: "https://github.com/HakimM16/connect-4",
      web_link: "https://connect-4-9ehl.vercel.app"
    },
    {
      name: "Crypto Tracker 🪙",
      description:
        "The Crypto Tracker App is a web application built with React.js that enables users to monitor real-time cryptocurrency prices. Users can navigate through various categories, including market cap, price changes, and 24-hour changes. It utilizes Axios to fetch live and historical data from the CryptoCompare API, while visualizations are created using Chart.js or Recharts. The app features modern, responsive styling with Tailwind CSS or Material-UI, making it a valuable tool for cryptocurrency enthusiasts looking to make informed decisions.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "CryptoCompare API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: crypto_tracker,
      source_code_link: "https://github.com/HakimM16/crypto-tracker",
      web_link: "https://crypto-tracker-tau-ten.vercel.app"
    },
    {
      name: "Gemini Clone 🌠",
      description:
        "This is a Google Gemini clone in a dark mode layout built with react.js, tailwind css and Gemini API. It produces basic text with bullet points and italics. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gemini_clone,
      source_code_link: "https://github.com/HakimM16/gemini_app",
      web_link: "https://gemini-clone-coral-sigma.vercel.app"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };