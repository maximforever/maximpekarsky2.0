
var allSongs = [
  {
    album: "The Resistance",
    name: "Uprising",
    lyrics: "If you could flick the switch and open your third eye <br>You'd see that we should never be afraid to die",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "Resistance",
    lyrics: "Kill your prayers for love and peace <br>You'll wake the thought police <br>We can't hide the truth inside",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "Undisclosed Desires",
    lyrics: "I want to reconcile the violence in your heart<br>I want to recognise your beauty's not just a mask",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "United States Of Eurasia",
    lyrics: "You and me fall in line<br>To be punished for unproven crimes",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "Guiding Light",
    lyrics: "When comfort and warmth can't be found<br>I still reach for you",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "Unnatural Selection",
    lyrics: "Dedication to a new age<br>Is this the end of destruction and rampage?",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "MK Ultra",
    lyrics: "How much deception can you take<br>How many lies will you create<br>How much longer until you break",
    done: false,
    correct: false
  },
  {
    album: "The Resistance",
    name: "I Belong To You",
    lyrics: "How much pain has cracked your soul?<br>How much love would make you whole?",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Take A Bow",
    lyrics: "Death<br>You bring death and destruction to all that you touch<br>Pay<br>You must pay for your crimes against the earth",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Starlight",
    lyrics: "Lets conspire to ignite<br>All the souls that would die just to feel alive",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Supermassive Black Hole",
    lyrics: "I thought I was a fool for no one<br>Ooh baby, I'm a fool for you",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Map Of The Problematique",
    lyrics: "Life will flash before my eyes<br>So scattered and lost<br>I want to touch the other side",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Soldier's Poem",
    lyrics: "And do you think you deserve your freedom<br>No I don't think you do",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Invincible",
    lyrics: "During the struggle, they will pull us down<br>But please, please let's use this chance<br>To turn things around",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Assassin",
    lyrics: "War is overdue<br>The time has come for you<br>To shoot your leaders down<br>Join forces underground",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Exo-Politics",
    lyrics: "When the Zetas fill the skies<br>Will our leaders tell us why",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "City Of Delusion",
    lyrics: "Can I believe<br>When I don't trust<br>All your theories<br>Turn to dust",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Hoodoo",
    lyrics: "I have had recurring nightmares<br>That I was loved for who I am<br>And missed the opportunity<br>To be a better man",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Knights Of Cydonia",
    lyrics: "You and I must fight for our rights<br>You and I must fight to survive",
    done: false,
    correct: false
  },
  {
    album: "Black Holes and Revelations",
    name: "Glorious",
    lyrics: "It rockets through the universe<br>It fuels the lies and feeds the curse",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Dead Inside",
    lyrics: "Unleash a million drones<br>And confine me then erase me babe",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Psycho",
    lyrics: "Your mind is just a program<br>And I'm the virus<br>I'm changing the station",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Mercy",
    lyrics: "Absent gods and silent tyranny<br>We're going under hypnotised<br>By another puppeteer",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Reapers",
    lyrics: "You rule with lies and deceit<br>And the world is on your side<br>You've got the CIA babe",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "The Handler",
    lyrics: "Leave me alone<br>I must disassociate from you",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Defector",
    lyrics: "You think you're strong and you can't be broken<br>But your empire is dissolving",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Revolt",
    lyrics: "Can you hear a distant thunder<br>Taste earth's blood and hunger<br>We live in a toxic jungle<br>Truth is suppressed to mumbles",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "Aftermath",
    lyrics: "States are crumbling<br>Walls are rising high again<br>It's no place for the faint-hearted",
    done: false,
    correct: false
  },
  {
    album: "Drones",
    name: "The Globalist",
    lyrics: "There's no countries left<br>To fight and conquer<br>I think I destroyed them all",
    done: false,
    correct: false
  }
]


var app = new Vue({
    el: "#main-app",
    data: {
        endTime: 0,
        timeLeft: null,
        name: "muse",
        currentSong: null,
        correctGuesses: 0,
        completedGuesses: 0
    },
    
    mounted: function(){
        this.endTime = Date.now() + 1000 * 61;
        this.getRandomSong();

        var self = this;
        var timeCountdown = setInterval(function(){
            var timeNow = Date.now();
            var secondsLeft = Math.floor((self.endTime - timeNow)/1000);
            if(secondsLeft < 10 ){
                secondsLeft = "0" + secondsLeft.toString();
            }
            self.timeLeft = secondsLeft;

            if(secondsLeft <= 0 ){
                clearInterval(timeCountdown);
            }
        }, 1000)
    },  
    computed: {
        timeStillRemaining(){
            if(this.timeLeft == null || parseInt(this.timeLeft) > 0){
                return true;
            } else {
                return false;
            }
        },
        getAccuracy(){
            var accuracy = Math.floor(this.correctGuesses / this.completedGuesses * 1000)/10;
            if(isNaN(accuracy)){ accuracy = 0 }
            return accuracy;
        }
    },


    methods: {
        getRandomSong(){

            var successfullySelectedSong = null;
            tryCount = 0;

            // get a random song that hasn't been guessed yet
            while(successfullySelectedSong == null && tryCount < 1000){
                tryCount++;

                var randomIndex = Math.floor(Math.random()*allSongs.length);
                var randomSong = allSongs[randomIndex];

                if(!randomSong.done){
                    successfullySelectedSong = randomSong;
                }
            }
            //console.log(`selected song in ${tryCount} tries`);

            this.currentSong = {
                lyrics: successfullySelectedSong.lyrics,
                name: successfullySelectedSong.name,
                correct: false,
                choices: []
            };

            tempChoices = [];
            tempChoices.push(successfullySelectedSong.name);


            tryCount = 0;
            // get a 3 other random song names
            while(tempChoices.length < 4 && tryCount < 1000){
                var randomIndex = Math.floor(Math.random()*allSongs.length);
                var randomSong = allSongs[randomIndex];

                if(tempChoices.indexOf(randomSong.name) == -1 && !randomSong.done){
                    tempChoices.push(randomSong.name);
                }
            }

            this.currentSong.choices = shuffle(tempChoices);

        },

        submitChoice(choice){
        
            this.completedGuesses++;
            var self = this;
            var thisSong = allSongs.filter(function(song){
                return song.name == choice;
            });

            thisSong = thisSong[0];
            thisSong.done = true;

            if(this.currentSong.name == choice){
                console.log("Correct!");
                thisSong.correct = true;
                this.correctGuesses++;
                this.currentSong.correct = true;
            }

            setTimeout(function(){
                self.getRandomSong();
            }, 500)
            
        },

        songIsCorrect(choice){

            var thisSong = allSongs.filter(function(song){
                return song.name == choice;
            });
            thisSong = thisSong[0];

            return(thisSong.correct);
        }
    }
});


function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}


