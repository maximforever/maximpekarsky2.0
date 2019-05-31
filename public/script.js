var projects = new Vue({
    el: "#portfolio-main",
    data: {
        projects: allProjects,
        filters: []
    },
    methods: {
        filteredProjects(){

            if(!this.filterByTags.length){
                return this.projects
            }

            return allProjects.filter((project) => {
                return project.tags.includes(this.filters[0].toLowerCase())
            });
        },

        filterByTag(tag){
            console.log(`filtering by ${tag}`);
            this.filters = [tag];
        }
    }
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

