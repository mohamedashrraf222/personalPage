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
    name: "tenzies-game",
    descreption:
      "This is a tenzies-game that I have created along with scrimba's React course. In this project I used React components and states to update the page with the user interactions",
    pic: "/personalPage/images/tenzies-game.jpg",
    github: "https://github.com/mohamedashrraf222/tenzies-game.git",
    key: 1,
    demo: "https://mohamedashrraf222.github.io/tenzies-game/",
    type: app,
    skills:[
      JavaScript,react
    ]
  },
  {
    name: "Restaurants App",
    descreption:"This is a full MERN stack project that I have created along with freecodecampe. when I created this project I learned basics of creating a database with mongo DB, handle routes and creating data access object (DAO) to get the data from the server accourding to search name or zip code or cuisine.",
    pic:"/personalPage/images/restaurants.jpg",
    github: "https://github.com/mohamedashrraf222/restaurantsWebApp.git",
    key: 6,
    demo:"https://restaurants-web-app.onrender.com/",
    type : app,
    skills:[
      JavaScript,node,mongo
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
      JavaScript,react
    ]
  },
  {
    name: "weather Journal App",
    descreption:
    "I have created for this project a backend server using nodeJS, you can check the server files and code on GitHub. I am using an API to get data according to user input with jQuery, JavaScript and promis functions, then fetch and filter data returned to get the weather. ",
    pic: "/personalPage/images/weather.jpg",
    github: "https://github.com/mohamedashrraf222/Weather-Journal-App.git",
    key: 3,
    demo: "https://wether-web-app.onrender.com/",
    type: app,
    skills:[
      JavaScript,node
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
      JavaScript,react
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
      JavaScript,react
    ]
  },
];

export default myProjects;
