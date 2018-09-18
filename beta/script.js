var allProjects = {

    hackterms: {
        category: "app",
        name: "Hackterms",
        tags: ["Node.js", "Express", "HTML/CSS", "SASS", "Javascript", "jQuery", "Handlebars.js", "MongoDB"],
        pictures: ["hackterms.gif"],
        description: "Hackterms is a crowdsourced dictionary of coding terms, currently at over 1200 definitions from hundreds of contributors.",
        github: "https://github.com/maximforever/hackterms",
        live: "https://www.hackterms.com"
    },

    theygotfit: {
        category: "game",
        name: "They Got Fit",
        tags: ["Rails 4", "PostgreSQL", "HTML/CSS", "Javascript", "jQuery", "Bootstrap"],
        pictures: ["theygotfit.gif"],
        description: "TheyGotFit shows you before and after pictures that match your fitness goals. Enter your current and desired weight and see photos of other people who've undergone this tranformation. Upload your own photos and share your fitness progress.",
        github: "https://github.com/maximforever/theygotfit",
        live: "http://www.theygotfit.com"
    },

    traffic: {
        category: "experiment",
        name: "Traffic Simulator",
        tags: ["HTML/CSS", "Canvas", "Javascript"],
        pictures: ["traffic.gif"],
        description: "A traffic simulator built with vanilla JS and HTML canvas",
        github: "https://github.com/maximforever/traffic",
        live: "/projects/traffic"
    },
    spaceSquares: {
        category: "game",
        name: "SpaceSquares",
        tags: ["HTML/CSS", "Canvas", "Javascript", "Firebase"],
        pictures: ["spcsqrs.gif"],
        description: "Battle swarms of flesh-eating Space Squares in this throwback arcade game!",
        github: "https://github.com/maximforever/starfield",
        live: "https://spcsqrs.firebaseapp.com/"
    },
    shootout: {
        category: "game",
        name: "Shootout",
        tags: ["Node.js", "Express", "Socket.io", "HTML/CSS", "Canvas", "Javascript", "Firebase"],
        pictures: ["theygotfit.jpg"],
        description: "Shootout is a 2-player cyberpunk arcade game, complete with powerups, and an original soundtrack and art.",
        github: "https://github.com/maximforever/shootout",
        live: "https://shootoutgame.herokuapp.com/"
    },
    wtfistoday: {
        category: "app",
        name: "WTF is today?",
        tags: ["HTML/CSS", "Javascript", "Flexbox"],
        pictures: ["wtfistoday.gif"],
        description: "What obscure food/science/awareness holiday is today? ",
        github: "https://github.com/maximforever/maximforever.github.io/tree/master/projects/wtfistoday",
        live: "www.wtfistoday.com"
    },
    WordSync: {
        category: "game",
        name: "WordSync",
        tags: ["Node.js", "Express", "MongoDB", "Socket.io", "HTML/CSS", "Javascript"],
        pictures: ["wordsync.gif"],
        description: "A sockets.io powered Node/Express/MongoDB game that challenges two players to think of the same word at the same time? ",
        github: "https://github.com/maximforever/wordsync",
        live: "http://wordsync.herokuapp.com"
    },
    chess: {
        category: "game",
        name: "Chess",
        tags: ["HTML/CSS", "Javascript"],
        pictures: ["chess.gif"],
        description: "<a href = 'www.jamesmayr.com'>James Mayr</a> and I set out to collaboratively build an age-old game: Chess. Holy recursion!",
        github: "https://github.com/jamesbmayr/chess",
        live: "https://rawgit.com/jamesbmayr/chess/master/"
    },
    bookVsMovie: {
        category: "app",
        name: "Book vs Movie",
        tags: ["Node.js", "Express", "HTML/CSS", "Javascript", "API"],
        pictures: ["bookvsmovie.jpg"],
        description: "Which is better - the book, or the movie? I built this small project with <a href = 'www.jamesmayr.com'>James Mayr</a> to answer that question. We used the Goodreads and IMDB APIs for ratings data.",
        github: "https://github.com/maximforever/bookvsmovie",
        live: "www.bookvsmovie.herokuapp.com"
    },
    hearTheirSide: {
        category: "app",
        name: "Hear Their Side",
        tags: ["Rails", "Bootstrap", "jQuery", ],
        pictures: ["heartheirside.jpg"],
        description: "A small project I completed before the contentious 2016 US election to encourage myself and my friends to anonymously and directly share our political opinions across party lines.",
        github: "https://github.com/maximforever/heartheirside",
        live: "www.heartheirside.com"
    }



}



var projects = new Vue({
    el: "#portfolio-main",
    data: {
        projects: allProjects,
    },
    methods: {}
});



var app = new Vue({
    el: "#main-app",
    data: {
        darkMode: false,
        aboutSwitchedOn: false
    },
    methods: {
        toggleDarkMode(){
            console.log(this.darkMode);
            this.darkMode = this.darkMode ? false : true;
        },
        swichAboutOn(){
            this.aboutSwitchedOn = this.aboutSwitchedOn ? false : true;
        }
    }
});
