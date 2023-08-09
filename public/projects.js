const app = "app"
const project = "project"

const html = "/personalPage/images/html.png"
const JavaScript = "/personalPage/images/js.png"
const react = "/personalPage/images/react.png"
const node = "/personalPage/images/node.png"
const redux = "/personalPage/images/redux.png"
const css = "/personalPage/images/css.png"
const mongo = "/personalPage/images/mongo.png"


let myProjects = [
  {
    name: "Tenzies-game",
    descreption:
      "This is tenzies game that I have created for practice while learning Reacts. I created its algorithm along with scrimba's React course. You are able to hold the number by clicking on it so when you roll it will not change. To win you have to roll and hold the number until making all squares with the same number.",
    pic: "/personalPage/images/tenzies-game.jpg",
    github: "https://github.com/mohamedashrraf222/tenzies-game.git",
    key: 1,
    demo: "https://mohamedashrraf222.github.io/tenzies-game/",
    type: app,
    skills:[
      html,css,JavaScript,react
    ]
  },
  {
    name: "Restaurants App",
    descreption:"This is a full MERN stack project that I have created along with freecodecampe video. when I recreated this project I learned the basics of creating a database with mongo DB, handle routes and creating data access object (DAO) to take the data from the server and then responding to the frontend accourding to search name or zip code or cuisine.  ",
    pic:"/personalPage/images/restaurants.jpg",
    github: "https://github.com/mohamedashrraf222/restaurantsWebApp.git",
    key: 11,
    demo:"",
    type : app,
    skills:[
      html,css,JavaScript,node,mongo
    ]
  },
  {
    name: "My Reads App",
    descreption:
    "This project I created with React from a starter code was provided in Udacity's React course that contained only CSS and HTML elements, it was without any functionality and I have created all its functions as a graduation project. I use an API to add or update or remove books from the main page.",
    pic: "/personalPage/images/myReads.jpg",
    github: "https://github.com/mohamedashrraf222/myReadsApp.git",
    key: 2,
    demo: "https://mohamedashrraf222.github.io/myReadsApp/",
    type: app,
    skills:[
      html,css,JavaScript,react
    ]
  },
  {
    name: "weather Journal App",
    descreption:
    "I have created for this project a backend server using nodeJS, you can check the server files and code on GitHub. I am using an API to get data according to user input with jQuery, JavaScript and promis functions, then fetch and filter data returned to get the weather. ",
    pic: "/personalPage/images/weather.jpg",
    github: "https://github.com/mohamedashrraf222/Weather-Journal-App.git",
    key: 3,
    demo: "",
    type: app,
    skills:[
      html,css,JavaScript,node
    ]
  },
  {
    name: "meme genrator",
    descreption:
    "This project I created along with React Scrimba course. It's using an API to get the best 100 memes pictures then randomly choose one of them to put your two inputs on them to create funny memes.",
    pic: "/personalPage/images/memeGen.jpg",
    github: "https://github.com/mohamedashrraf222/memeGenratorScrimba.git",
    key: 4,
    demo: "https://mohamedashrraf222.github.io/memeGenratorScrimba/",
    type: app,
    skills:[
      html,css,JavaScript,react
    ]
  },
  {
    name: "Credit Card Checker",
    descreption:
    "This is a credit card validiator web app, It's based on Luhn's algorithm to determine whether or not a credit card number is valid.",
    pic: "https://live.staticflickr.com/65535/52808377105_3ee5219d6c_o.png",
    github: "https://github.com/mohamedashrraf222/creditCardChecker.git",
    key: 5,
    demo: "https://mohamedashrraf222.github.io/creditCardChecker/",
    type: app,
    skills:[
      html,css,JavaScript,react
    ]
  },
  {
    name: "Load Numbers",
    descreption:
    "This is just a complement project that can be drived in a large project.",
    pic: "https://live.staticflickr.com/65535/52807402622_289d563cdb_o.png",
    github: "https://github.com/mohamedashrraf222/loadNumbers.git",
    key: 6,
    demo: "https://mohamedashrraf222.github.io/loadNumbers/",
    type: project,
  },
  {
    name: "React Facts",
    descreption:
    "This is a very simple project that I have created along with Scrimba React course as a training for creating a static react page",
    pic: "/personalPage/images/react facts.jpg",
    github: "https://github.com/mohamedashrraf222/ReactFactsScrimba.git",
    key: 7,
    demo: "https://mohamedashrraf222.github.io/ReactFactsScrimba/",
    type: project,
  },
  {
    name: "Travel Journal",
    descreption:
    "This is a very simple project that I have created as a training for creating a static react page",
    pic: "/personalPage/images/travelJornal.jpg",
    github: "https://github.com/mohamedashrraf222/travel-journal.git",
    key: 8,
    demo: "https://mohamedashrraf222.github.io/travel-journal/",
    type: project,
  },
  {
    name: "personal business card",
    descreption:
    "This project is simple, I have created it for myself and as a training for creating a static react page",
    pic: "/personalPage/images/personalCard.jpg",
    github: "https://github.com/mohamedashrraf222/business-card.git",
    key: 9,
    demo: "https://mohamedashrraf222.github.io/business-card/",
    type: project,
  },
  {
    name: "Mutiple page",
    descreption:
    "This is a very simple static page that's created with only css and html that I created when I was learning html and css with Freecodecamp.",
    pic: "/personalPage/images/myPage.jpg",
    github: "",
    key: 10,
    demo: "https://codepen.io/mohamedashrraf222/pen/RwaYaYy?editors=1100",
    type: project,
  },
  {
    name: "Flask translator web app",
    descreption:
    "In this project there is a flask server that handles routes and request. There are funcions that contact with LanguageTranslatorV3 from IBM services to translate the needed text entered from the frontend. When the user enter text, the server uses translator.py that's imported to server.py to get the translation of the text.",
    pic: "/personalPage/images/myPage.jpg",
    github: "https://github.com/mohamedashrraf222/Flask_translator_web_app",
    key: 11,
    demo: "",
    type: app,
  },
  {
    name: "Django online courses app",
    descreption:
    "This project is a django app for online courses that you can login and enroll to the courses and take exams. Created from starter code repository that was forked from IBM. There are many functions and classes in view.py to handle diffrent routes in urls.py",
    pic: "/personalPage/images/myPage.jpg",
    github: "https://github.com/mohamedashrraf222/Django_online_courses_app",
    key: 12,
    demo: "",
    type: app,
  },
];

export default myProjects;
