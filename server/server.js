// Require Express to run server and routes
const express = require("express");
const path = require("path");
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const exp = require("constants");
app.use(cors());

// Setup Server
const port = 4000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

app.use(express.static(path.join(__dirname + "/public")));

app.get("/data", (req, res) => {
  res.json({ users: "hii" });
});

app.get("/myProjectsData", (req, res) => {
  const projects = [
    {
      name: "tenzies-game",
      descreption:
        "This is a tenzies-game that I have created along with scrimba's React course. In this project I used React components and states to update the page with the user interactions",
      pic: "/images/tenzies-game.jpg",
      github: "https://github.com/mohamedashrraf222/tenzies-game.git",
      key: 1,
      demo: "https://mohamedashrraf222.github.io/tenzies-game/",
    },
    {
      name: "My Reads App",
      descreption:
        "This project I created with React from a starter code was provided in Udacity's React course that contained only CSS and HTML elements, it was without any functionality and I have created all its functions as a graduation project. I use an API to add or update or remove books from the main page.",
      pic: "/images/myReads.jpg",
      github: "https://github.com/mohamedashrraf222/myReadsApp.git",
      key: 2,
      demo: "https://mohamedashrraf222.github.io/myReadsApp/",
    },
    {
      name: "weather Journal App",
      descreption:
        "I have created for this project a backend server using nodeJS, you can check the server files and code on GitHub. I am using an API to get data according to user input with jQuery, JavaScript and promis functions, then fetch and filter data returned to get the weather. ",
      pic: "/images/weather.jpg",
      github: "https://github.com/mohamedashrraf222/Weather-Journal-App.git",
      key: 3,
      demo: "https://codepen.io/mohamedashrraf222/pen/oNyWqap",
    },
    {
      name: "meme genrator",
      descreption:
        "This project I created along with React Scrimba course. It's using an API to get the best 100 memes pictures then randomly choose one of them to put your two inputs on them to create funny memes.",
      pic: "/images/memeGen.jpg",
      github: "https://github.com/mohamedashrraf222/memeGenratorScrimba.git",
      key: 4,
      demo: "https://mohamedashrraf222.github.io/memeGenratorScrimba/",
    },
    {
      name: "personal business card",
      descreption:
        "This project is simple, I have created it for myself and as a training for creating a static react page",
      pic: "/images/personalCard.jpg",
      github: "https://github.com/mohamedashrraf222/business-card.git",
      key: 5,
      demo: "https://mohamedashrraf222.github.io/business-card/",
    },
    {
      name: "React Facts",
      descreption:
        "This is a very simple project that I have created along with Scrimba React course as a training for creating a static react page",
      pic: "/images/react facts.jpg",
      github: "https://github.com/mohamedashrraf222/ReactFactsScrimba.git",
      key: 6,
      demo: "https://mohamedashrraf222.github.io/ReactFactsScrimba/",
    },
    {
      name: "Travel Journal",
      descreption:
        "This is a very simple project that I have created as a training for creating a static react page",
      pic: "/images/travelJornal.jpg",
      github: "https://github.com/mohamedashrraf222/travel-journal.git",
      key: 7,
      demo: "https://mohamedashrraf222.github.io/travel-journal/",
    },
    {
      name: "Mutiple page",
      descreption:
        "This is a very simple static page that's created with only css and html that I created when I was learning html and css with Freecodecamp.",
      pic: "/images/myPage.jpg",
      github: "",
      key: 8,
      demo: "https://codepen.io/mohamedashrraf222/pen/RwaYaYy?editors=1100",
    },
  ];

  res.json(projects);
});

app.get("/mycirtificatesData", (req, res) => {
  const myData = [
    {
      name: "JavaScript Algorithms and Data Structures",
      about: `In this course I learned the fundamentals of JavaScript including variables, arrays, objects, loops, and functions. Also learned 
          ECMAScript with its features, including arrow functions, destructuring, classes, promises, and modules. Along the way, I also learned 
          two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP). Learned Basic 
          Data Structures, Basic Algorithm Scripting, To write an effective algorithm and break a problem down into smaller parts and think 
          carefully about how to solve each part with code.`,
      link: "https://www.freecodecamp.org/certification/fcc19a40b74-12c5-483e-80ef-a3fd0ce39418/javascript-algorithms-and-data-structures",
      picture: "/images/javascript.jpg",
    },
    {
      name: "React Development Cross-Skilling",
      about:
        "In this course, I learned the foundational parts of the React ecosystem that are necessary to build production-ready apps, create modular and custom components that can be reused all over your web application, what React Routers are and how to create multiple routes on your web application, making it more dynamic, and  React Lifecycle methods and how they are important for the performance and speed of your web app.",
      link: "https://confirm.udacity.com/THDCGXT3",
      picture:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/d9cd177a-476e-4ec0-a50b-33ff3176428c.svg",
    },
    {
      name: "Professional Front-End Web Development",
      about:
        "This is a nanodegreee cirtificate in Front-End web development from udacity. with this course I have Learned JavaScript Data Types, Understood logic and control flow, Learned how to write proper and correct JavaScript Syntax, Create web content using Javascript, Modify web content using Javascript, Manage website performance, Work with Node and Express to develop a web application, Build a webserver with nodeJS and Use promises to manage asynchronous Javascript.",
      link: "https://confirm.udacity.com/DLLS5HHP",
      picture:
        "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/006c05cc-5333-47b9-9e2f-8a105d1aa3b9.svg",
    },
    {
      name: "concepts of version control with Git and GitHub",
      about:
        "In this course, I learned how to handle basic Git commands, Explore the Git log, Understand the meaning of 'branching', Use GitHub for storing your work online, Save files online with GitHub, and Use Git for version control.",
      link: "https://learn.365datascience.com/c/74da887de8/",
      picture:
        "https://365datascience.com/resources/certificates/CC-409B1E21C4.jpg",
    },
    {
      name: "Responsive Web Design",
      about:
        "In this Responsive Web Design Certification, I've learned the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. First, I built an application to learn the basics of HTML and CSS. Then, I learned modern techniques like CSS variables and practiced by building a web form. I have learned how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.",
      link: "https://freecodecamp.org/certification/fcc19a40b74-12c5-483e-80ef-a3fd0ce39418/responsive-web-design",
      picture: "/images/responsive web design.jpg",
    },
    {
      name: "verified certificate for Android Development Track",
      about: "",
      link: "https://drive.google.com/file/d/1iVXeGVMDmb4GZ1pdXXkJ9bVBHSFWLxYf/view?usp=sharing",
      //   picture:
      //     "https://lh3.googleusercontent.com/fife/AAbDypC6qBDzVtdcmUi416YfAh5NPYd3IkYxf2krOIvNcQE3B0xHuL_bd2BM9QUTw7phjj6CCIFbt--Iy2t1TLjQE-fXlwi1Qv0PDRTIwxjRMxPoeGsKpCAvJ49z_UJMgbFVaJIbXKxJ1PVh_K6io4pLJAGPgEXlRmD1FB6o93qcexAQK_9gv7dR9HNMtptIgsZ7VblbbyLIL528dUEqv2BDvqz6waW2JSZJ3Nydl5oIessR_oQlPjDNnpTDQZonrBVMY5w9I9e00qg7EzvvSqnKFLfJqzPBKLvn29rcRpBa4luOgLVvD8Oz9HrkHMJApdLP5aoI9qKov9ISwmH4dSqlRCFvgmxKBipJQ5tD2JukUrIqV_juXN5jquVOISw0Kgcm84f0kYuhmK42dU3rUV1ufnayLgJajLIN6rV404-0baBxFA8RmbwdbjJ0g-tSpRiM-JIXh-t9MXYkvFZnkBSVQgmcVg3p-Pr9wdy5BYUdYrkcU1kn5rgxKlYH319B-eekYK_Y2LOHeNRhOpCGJiVEdAh-t-nKiTnQ4qjLCkJCEn9Yft35_sUqzLzwv9YKY1tucDqX5SV2jaQSJ7tB315Zx46ryM94bFOVG6W8dnMOH4IjO5LMmGlHTpP8VZbEMDvGYvqe_ValU8-EtSCn354as2S3sbogdRmsFHeNa2epirdHMFBv47G9kVwpQWp0oZ10f9eTmObcBC7g95aggCEtLCpMQMcsLVYr6uVdFFStrsFSAu51KnCtJ2A_G7iShGySxZh5o34eer9IB47Y97Pq_ax5n5LLndII7XJRzQtEmsYxSKdbraDWkU9i3V8muJRQnlvTseKx6fJiZlfLFgkmprfoQ9lM2cHITchlJOAvahc87KePpg_bTOPGPra2FmQVDfPL2_EclUIwO8EVcxSalN4vn2wbNJmzPPa4_LYZj1A1wdMWy0xp_aEscIJ1nUx40IL_5xPH1PQZOhe7oSCvPm9Xb7Qh-vskdQwb8gHtnRSa5I2beaYIxqJCdFNRNqFgzHeBtU91M8aaOFMC5xavH8gBnzaJxaJLlYiYR5-DY_Jrjmea1mS4uiUEwL2zxVvdLGmsWP8SPUqillDy6LBb3S19qlZJXeZM5HsSTQDnJR5caElU9uEOmTmXP6pl-uJVEEhKUzUMT-qCa__LmtRWc9vTalvYavGwTzYz6KNHOWCnU1rsn0LJHsArCEVZPGsqGXsd6A5rlyVkoiXBRlZgrcKsxEqkyLequbwKHiqDK11kxn-MUeCmBME5yCtALVjoOMeOlkQAZeG2JhOJPIGAAo24W1ww8_LPiEEAjbpxv0LE4VyDwd-KpByvJkMEZ6VKcyBXESJYC3gPEd-_6rIDJEJn7YeEqNSN2JvGtHYQwUdoT64SzvupdC5IWchkSTNeTLcmal3TtrgCnieyp-bGiVSJBnSJP7zmBEFDC4JHGHQ3bTBaAPbCGGrlrsaUZU8rJo4PGBsmbnGSnMyfKdTutCYEBeHjfHrOpOYxKgDzXd5cr3m6RISPGR6dqbk_s6QFER656eFjkjAEZfvd0qaN5LJJV0vaKHw=w618-h652",
    },
  ];

  res.json(myData);
});

// GET route to return our main page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });
  