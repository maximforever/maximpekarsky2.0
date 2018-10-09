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
            this.darkMode = this.darkMode ? false : true;
            document.getElementsByTagName("html")[0].style.background = this.darkMode ? "#1c2b46" : "#f3f3f3";
        },
        swichAboutOn(){
            window.scrollTo(0, 0);
            this.aboutSwitchedOn = this.aboutSwitchedOn ? false : true;
        }
    }
});

