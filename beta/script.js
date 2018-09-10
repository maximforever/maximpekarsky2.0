console.log("ready");

var allProjects = {

    hackterms: {
        category: "app",
        name: "Hackterms",
        tags: ["Node.js", "Express", "HTML/CSS", "SASS", "Javascript", "jQuery", "Handlebars.js", "MongoDB"],
        pictures: [],
        description: "Hackterms is a crowdsourced dictionary of coding terms, currently at over 1200 definitions from hundreds of contributors.",
        github: "https://github.com/maximforever/hackterms",
        live: "https://www.hackterms.com"
    },

    theygotfit: {
        category: "game",
        name: "They Got Fit",
        tags: ["Rails 4", "PostgreSQL", "HTML/CSS", "Javascript", "jQuery", "Bootstrap"],
        pictures: [],
        description: "TheyGotFit shows you before and after pictures that match your fitness goals. Enter your current and desired weight and see photos of other people who've undergone this tranformation. Upload your own photos and share your fitness progress.",
        github: "https://github.com/maximforever/theygotfit",
        live: "http://www.theygotfit.com"
    },

    traffic: {
        category: "experiment",
        name: "Traffic Simulator",
        tags: ["HTML/CSS", "Canvas", "Javascript"],
        pictures: [],
        description: "A traffic simulator built with vanilla JS and HTML canvas",
        github: "https://github.com/maximforever/traffic",
        live: "/projects/traffic"
    },
    spaceSquares: {
        category: "game",
        name: "SpaceSquares",
        tags: ["HTML/CSS", "Canvas", "Javascript", "Firebase"],
        pictures: [],
        description: "Battle swarms of flesh-eating Space Squares in this throwback arcade game!",
        github: "https://github.com/maximforever/starfield",
        live: "https://spcsqrs.firebaseapp.com/"
    },
    shootout: {
        category: "game",
        name: "Shootout",
        tags: ["Node.js", "Express", "Socket.io", "HTML/CSS", "Canvas", "Javascript", "Firebase"],
        pictures: [],
        description: "Shootout is a 2-player cyberpunk arcade game, complete with powerups, and an original soundtrack and art.",
        github: "https://github.com/maximforever/shootout",
        live: "https://shootoutgame.herokuapp.com/"
    },
    wtfistoday: {
        category: "app",
        name: "WTF is today?",
        tags: ["HTML/CSS", "Javascript", "Flexbox"],
        pictures: [],
        description: "What obscure food/science/awareness holiday is today? ",
        github: "https://github.com/maximforever/maximforever.github.io/tree/master/projects/wtfistoday",
        live: "www.wtfistoday.com"
    },
    WordSync: {
        category: "game",
        name: "WordSync",
        tags: ["Node.js", "Express", "MongoDB", "Socket.io", "HTML/CSS", "Javascript"],
        pictures: [],
        description: "A sockets.io powered Node/Express/MongoDB game that challenges two players to think of the same word at the same time? ",
        github: "https://github.com/maximforever/wordsync",
        live: "http://wordsync.herokuapp.com"
    },
    chess: {
        category: "game",
        name: "Chess",
        tags: ["HTML/CSS", "Javascript"],
        pictures: [],
        description: "James Mayr and I set out to collaboratively build an age-old game: Chess. Holy recursion!",
        github: "https://github.com/jamesbmayr/chess",
        live: "https://rawgit.com/jamesbmayr/chess/master/"
    },
    bookVsMovie: {
        category: "app",
        name: "Book vs Movie",
        tags: ["Node.js", "Express", "HTML/CSS", "Javascript", "API"],
        pictures: [],
        description: "Which is better - the book, or the movie? I created a small project with James Mayr to answer that question. Built in Node + Express, using the Goodreads and IMDB APIs.",
        github: "https://github.com/maximforever/bookvsmovie",
        live: "www.bookvsmovie.herokuapp.com"
    }



}

var mainPage = new Vue({
    el: "#intro-section",
    data: {
        switchedOn: false
    },
    methods: {
        toggleAboutMe(){
            console.log("hovering!");
            this.switchedOn = this.switchedOn ? false : true;
        }
    }
});

var projects = new Vue({
    el: "#portfolio-main",
    data: {
        projects: allProjects,
        darkMode: false
    },
    methods: {
        toggleDarkMode(){
            console.log(this.darkMode);
            this.darkMode = this.darkMode ? false : true;
        }
    }
});
