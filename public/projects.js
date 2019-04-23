var allProjects = {

    hackterms: {
        category: "app",
        type: "big",
        name: "Hackterms",
        tags: ["Node.js", "Express", "HTML/CSS", "SASS", "JavaScript", "jQuery", "Handlebars.js", "MongoDB"],
        pictures: ["hackterms.gif"],
        description: "Hackterms is a crowdsourced dictionary of coding terms, currently at over 1200 definitions from hundreds of contributors.",
        github: "https://github.com/maximforever/hackterms",
        live: "https://www.hackterms.com"
    },

    NYCAnalyticsDashboard: {
        category: "app",
        type: "big",
        name: "NYC Mayor's Office Analytics Dashboard",
        tags: ["Node.js", "Express", "MongoDB", "API", "HTML/CSS", "Vue.js", "JavaScript",],
        pictures: ["nycoDash.gif"],
        description: "I built the NYC Opportunity Analytics Dashboard while at the NYC Mayor's Office, to help the team analyze submitted <a href = 'https://access.nyc.gov/' target='_blank'>ACCESS NYC</a> applications against city poverty data.",
        github: "https://github.com/CityOfNewYork/ACCESS-NYC",
        live: "http://nyco-dash.herokuapp.com/"
    },

    songmap: {
        category: "app",
        type: "big",
        name: "Songmap",
        tags: ["Node.js", "Express", "API", "three.js", "JavaScript"],
        pictures: ["songmap.gif"],
        description: "Songmap is a Spotify API-powered interactive star map, where every star is a song. Get music recommendations and explore your music tastes in 3D with three.js.",
        github: "https://github.com/maximforever/songmap",
        live: "https://thesongmap.herokuapp.com/"
    },

    speecher: {
        category: "app",
        type: "small",
        name: "Say What!?",
        tags: ["React.js", "Node.js", "Express", "API", "JavaScript"],
        pictures: ["speecher.gif"],
        description: "Say What!? is an Express/React.js-powered game where you guess famous quotes one word at a time. Quotes are pulled from the <a href = 'http://quotes.rest/' target='_blank'>They Said So API</a>. Users can guess or buy words, and earn money for each word they guess.",
        github: "https://github.com/maximforever/recurse/tree/master/react/speecher",
        live: "https://saywhatgame.herokuapp.com/"
    },

    theygotfit: {
        category: "game",
        type: "little",
        name: "They Got Fit",
        tags: ["Rails 4", "PostgreSQL", "HTML/CSS", "JavaScript", "jQuery", "Bootstrap"],
        pictures: ["theygotfit.gif"],
        description: "TheyGotFit shows you before and after pictures that match your fitness goals. Enter your current and desired weight and see photos of other people who've undergone this tranformation. Upload your own photos and share your fitness progress.",
        github: "https://github.com/maximforever/theygotfit",
        live: "http://www.theygotfit.com"
    },



    whichSong: {
        category: "game",
        type: "little",
        name: "Song Quiz",
        tags: ["HTML/CSS", "JavaScript", "Vue.js", "Firebase"],
        pictures: ["whichSong.gif"],
        description: "SongQuiz picks a random lyric snippet from a random song, and challenges the user to guess what the song is. Currently live for Muse and Panic! At the Disco.",
        github: "https://github.com/maximforever/songQuiz",
        live: "https://which-song.firebaseapp.com"
    },

    traffic: {
        category: "experiment",
        type: "little",
        name: "Traffic Simulator",
        tags: ["HTML/CSS", "Canvas", "JavaScript"],
        pictures: ["traffic.gif"],
        description: "A traffic simulator built with vanilla JS and HTML canvas",
        github: "https://github.com/maximforever/traffic",
        live: "/projects/traffic"
    },
    spaceSquares: {
        category: "game",
        type: "little",
        name: "SpaceSquares",
        tags: ["HTML/CSS", "Canvas", "JavaScript", "Firebase"],
        pictures: ["spcsqrs.gif"],
        description: "Battle swarms of flesh-eating Space Squares in this throwback arcade game!",
        github: "https://github.com/maximforever/starfield",
        live: "https://spcsqrs.firebaseapp.com/"
    },
    shootout: {
        category: "game",
        type: "little",
        name: "Shootout",
        tags: ["Node.js", "Express", "Socket.io", "MongoDB", "HTML/CSS", "Canvas", "JavaScript"    ],
        pictures: ["shootout.gif"],
        description: "Shootout is a 2-player cyberpunk arcade game, complete with powerups, and an original soundtrack and art.",
        github: "https://github.com/maximforever/shootout",
        live: "https://shootoutgame.herokuapp.com/"
    },
    wtfistoday: {
        category: "app",
        type: "little",
        name: "WTF is today?",
        tags: ["HTML/CSS", "JavaScript", "Flexbox"],
        pictures: ["wtfistoday.gif"],
        description: "What obscure food/science/awareness holiday is today? ",
        github: "https://github.com/maximforever/maximforever.github.io/tree/master/projects/wtfistoday",
        live: "http://www.wtfistoday.com"
    },
    WordSync: {
        category: "game",
        type: "little",
        name: "WordSync",
        tags: ["Node.js", "Express", "MongoDB", "Socket.io", "HTML/CSS", "JavaScript"],
        pictures: ["wordsync.gif"],
        description: "A sockets.io powered Node/Express/MongoDB game that challenges two players to think of the same word at the same time? ",
        github: "https://github.com/maximforever/wordsync",
        live: "http://wordsync.herokuapp.com"
    },
    chess: {
        category: "game",
        type: "little",
        name: "Chess",
        tags: ["HTML/CSS", "JavaScript"],
        pictures: ["chess.gif"],
        description: "<a href = 'https://jamesmayr.com/' target='_blank'>James Mayr</a> and I set out to collaboratively build an age-old game: Chess. Holy recursion!",
        github: "https://github.com/jamesbmayr/chess",
        live: "https://rawgit.com/jamesbmayr/chess/master/"
    },
    bookVsMovie: {
        category: "app",
        type: "little",
        name: "Book vs Movie",
        tags: ["Node.js", "Express", "HTML/CSS", "JavaScript", "API"],
        pictures: ["bookvsmovie.jpg"],
        description: "Which is better - the book, or the movie? I built this small project with <a href = 'https://jamesmayr.com/' target='_blank'>James Mayr</a> to answer that question. We used the Goodreads and IMDB APIs for ratings data.",
        github: "https://github.com/maximforever/bookvsmovie",
        live: "http://bookvsmovie.herokuapp.com/"
    },
    hearTheirSide: {
        category: "app",
        type: "little",
        name: "Hear Their Side",
        tags: ["Rails", "Bootstrap", "jQuery", ],
        pictures: ["heartheirside.jpg"],
        description: "A small project I completed before the contentious 2016 US election to encourage myself and my friends to anonymously and directly share our political opinions across party lines.",
        github: "https://github.com/maximforever/heartheirside",
        live: "http://heartheirside.herokuapp.com/"
    },
    starMap: {
        category: "app",
        type: "little",
        name: "Moving Around A Star Map",
        tags: ["HTML/CSS", "JavaScript", "Canvas"],
        pictures: ["starmap.gif"],
        description: "An HTML canvas project I built as a foundation for a discovery platform. The canvas is populated with 'stars', nodes representing real world objects. Clicking a one highlights the nearby stars, and allows you to travel between them.",
        github: "https://github.com/maximforever/maximforever.github.io/tree/master/projects/6",
        live: "http://maximpekarsky.com/projects/6/"
    },
    wordClock: {
        category: "experiment",
        type: "little",
        name: "Text Clock",
        tags: ["HTML/CSS", "JavaScript", "Flexbox"],
        pictures: ["clock.gif"],
        description: "A text clock with several color themes, including a festive Christmas theme",
        github: "https://github.com/maximforever/maximpekarsky.com/tree/master/public/projects/clock",
        live: "http://maximpekarsky.com/projects/clock/"
    },
    gridGenerator: {
        category: "experiment",
        type: "little",
        name: "Grid Generator",
        tags: ["HTML/CSS", "JavaScript", "Flexbox"],
        pictures: ["flipper.gif"],
        description: "A black/white grid generator based on coin flips - inspired by a <a href='https://www.reddit.com/r/mildlyinteresting/comments/9qnvy6/i_filled_in_the_squares_of_this_grid_according_to/' target='_blank'>reddit post</a>",
        github: "https://github.com/maximforever/maximpekarsky.com/tree/master/public/projects/flipper",
        live: "http://maximpekarsky.com/projects/flipper/"
    },
    battleSimulator: {
        category: "game",
        type: "little",
        name: "QRL Battle Simulator",
        tags: ["HTML/CSS", "JavaScript"],
        pictures: ["battle.gif"],
        description: "A GUI for an algorithm that resolves battles between two players with multiple units under various conditions. Stimulate up to 100,000 battles!",
        github: "https://github.com/maximforever/maximforever.github.io/tree/master/projects/battles",
        live: "http://maximpekarsky.com/projects/battles/"
    }



}