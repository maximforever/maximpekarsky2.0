//const axios = require('axios');

var BAND_NAME = "muse";
var QUIZ_TIME = 60;              // seconds
var PHOTO_COUNT = 3;             


var allSongs = [
    {
        "name": "Backdoor",
        "album": "Other and Unreleased",
        "lyrics": "Backdoor\nLooking out for a jackdoor\nFor all the things that we hoped for\nDrowning in a pool of fear"
    },
    {
        "name": "Boredom",
        "album": "Other and Unreleased",
        "lyrics": "We should be in the summer spirit\nBut it might as well be rain\nWe should be having such a good time\nBut I'm so bored it's causing me pain\n\nMy dear\nThis love is dead\nSomehow, someway\nYou'll come away\nWith you it's dead\n\nI can't let you pretend\nThese days\n(These days)\nAre the best you've had\n\nDoesn't matter 'cause I love you\n\nStop telling me to try and cheer up\nI just don't wanna be here\nWe should be having such a good time\nBut you're no good\nNo, you are going blind\n\nMy dear\nThis love is dead\nThere's no way\nYou'll come away\nWith you it's dead\n\nI can't let you pretend\nThese days\n(These days)\nAre the best you've had\n\nMy dear, this love is dead\nSomehow, someway\nYou'll come away"
    },
    {
        "name": "Falling with the Crowd",
        "album": "Other and Unreleased",
        "lyrics": "So I will close my ears to the falling with the crowd\nI never thought of her\nI listen to your air\nTry to shout and I will smile\n\nYou can hear, hear your infectious laugh\nBut you can't hear me ring the bell\nYou can hear, hear you singing along to this\nAnd pretending not to hear me shout\nToo many heard\n\nSo I will close my ears to the falling with the crowd\nI never thought of her\nI listen to your air\nTry to shout and I will smile\nI never thought of her\n\n(Falling with the crowd)\nHere's to my mistake\n(Falling with the crowd)\nI wanna go home\nDressed by no one else\n\nDoesn't matter 'cause I'm not that sure\nTo aware of what's been done before\nYou can hear, hear you singing along to this\nAnd pretending not to hear me shout\nYou know its true\n\nSo I will close my ears to the falling with the crowd\nI never thought of her\nI listen to your air\nTry to shout and I will smile\nI never thought of her\n\n(Falling with the crowd)\nDressed my breath to live\n\nI wanna go home\nDressed by no one else\nDrilled into my cave"
    },
    {
        "name": "Feed",
        "album": "Other and Unreleased",
        "lyrics": "She ran every time\nMet me by the west side\nI had to give her mouth-to-mouth\nWhen we only got another day..."
    },
    {
        "name": "Forameus",
        "album": "Other and Unreleased",
        "lyrics": "Our lives at stake\nI just wanna give it away\nOur lives at stake\nSo let's just sign it away\n\nIt doesn't matter\nIt doesn't matter\nIt doesn't matter\nIt doesn't matter\n\nFalling once again\nYou'll do it anyway\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again\n\nOur lives at stake\nI just wanna give it away\nAnd our lives disdain yeah\nSo let's just sign it away\n\nIt doesn't matter...\nIt doesn't matter...\nIt doesn't matter...\nIt doesn't matter...\n\nFalling once again\nYou'll do it anyway\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again\nYeah yeah yeah yeah!\n\n(Sung really fast)\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again\nYou do it to me once again\nYou do it to me night and day\nYou do it do it all again"
    },
    {
        "name": "Jigsaw Memory",
        "album": "Other and Unreleased",
        "lyrics": "Say you lose something\nWhat'll get you anywhere\nCome on every jigsaw memory faded into for..."
    },
    {
        "name": "Rain",
        "album": "Other and Unreleased",
        "lyrics": "Come with me to nowhere\nAnd I'll show you nothing special\nI'm still pleased to see you\nAlive\n\nI know you'll forget me\nBut I don't care 'cause I'm always with you\nYou don't care for anyone\nOoh\n\nI'm not gonna let you\nI'm not gonna let your love kill me\nMy heart is strong enough\nTo let them know this\n\nI just need a witness\nTo say that I was there to feel this\nYou'll forget me\n\nSo come with me to nowhere\nAnd I'll show you nothing special\nI'm still pleased to see you\nAlive\n\nI'm not gonna let you\nI'm not gonna let your love kill me\nMy heart is strong enough\nTo let them know this\n'Cause I just need to know that I can\n\n'Cause I just need to know that I can\nI won't let you\nI'm not gonna let your love kill\nNow that you know\nI'm stronger"
    },
    {
        "name": "Sling",
        "album": "Other and Unreleased",
        "lyrics": "It's so sad\nDo you know how much I try?"
    },
    {
        "name": "Soaked",
        "album": "Other and Unreleased",
        "lyrics": "Soaked to the bone\nAnd sink like a stone\nWalk home alone\nIt's not the first time \nIt's not the worst crime\nYour soul will be OK\n\nWhen you've had enough\nSearching for love\nAnd you miss the touch \nOf someone new\n\nBurnt by dreams\nIt's never how it seems\nCold, crushed esteem\nTake shelter and hide forever\nYour soul will be OK\n\nAnd you've had enough\nSearching for love\nBut you missed the touch \nOf someone new\n\nWell I've had enough\nSearching for love\nBut I've missed the touch \nOf someone new\n\nSoaked to the bone\nSink like a stone\nI will take you home\nIt's not the first time\nIt's not the worst crime\nOur souls will be OK"
    },
    {
        "name": "Dead Star",
        "album": "Other and Unreleased",
        "lyrics": "Shame on you for thinking that you're an exception\nWe're all to blame\nCrashing down to Earth\nWasting and burning out yeah\nFading like a dead star\nHarm is coming your way\nYeah it's coming your way\n\nYou used to be everything to me\nAnd now you're tired of fighting\nTired of fighting, fighting yourself\n\nShame on you for thinking you're all alone\nIf you want I'll make you wish you were\nFailing to impress\nWhy can't you sleep with someone who'll protect you\nHarm is coming your way\n\nYeah it's coming your way\n\nYou used to be everything to me\nAnd now you're tired of fighting\nTired of fighting, of fighting yourself"
    },
    {
        "name": "Agitated",
        "album": "B-sides",
        "lyrics": "You make me agitated \nWith all the things you've hated\nBut you're uncomplicated\nSo why should it affect you\nThat my loving was so untrue?\n\nYou do it to me sweetly\nTo my yeah yeah\nYou do it to me lovely\nTo my yeah yeah\n\nYou try to make me crazy\nYou make me agitated\nBut we're not suffocated\nSo why should it affect you\nThat my loving was so untrue?\n\nYou do it to me sweetly\nTo my yeah yeah\nYou do it to me lovely\nTo my yeah yeah"
    },
    {
        "name": "Ashamed",
        "album": "B-sides",
        "lyrics": "I know there's something that you're dying to tell me\nI hope it's not about your loving\n\nMake sure no one finds out\nTell me all about it\nDon't keep it to yourself\n'Cause I can't bear the thought\nI never needed your cry\nBut I love your cry\nDoesn't matter, 'cause I'm in control\n\nI know that you're ashamed\nSo emotional that it kills you\nDon't you know that you're ashamed?\nSo emotional that you cry\n\nThere's always something that makes you guilty\nThere's still something that you're dying to tell me\n\nMake sure no one finds out\nTell me all about it\nDon't keep it to yourself\n'Cause I can't bear the thought\nI never needed your cry\nBut I love your cry\nDoesn't matter, 'cause I'm in control\n\nI know that you're ashamed\nSo emotional that it kills you\nDon't you know that you're ashamed?\nSo emotional that you cry"
    },
    {
        "name": "Can't Take My Eyes Off You",
        "album": "B-sides",
        "lyrics": "You're just too good to be true\nCan't keep my eyes off of you\nYou feel like heaven to touch\nI wanna hold you so much\nAt long last love has arrived\nAnd I thank God I'm alive\nYou're just too good to be true\nCan't take my eyes off you\n\nPardon the way that I stare\nThere's nothing else to compare\nThe sight of you makes me weak\nThere are no words left to speak\nBut if you feel like I feel\nPlease let me know that it's real\nYou're just too good to be true\nCan't take my eyes off you\n\nI love you, baby\nAnd if it's quite all right\nI need you, baby\nTo warm the lonely nights\nI love you, baby\nTrust in me when I say\nOh, pretty baby\nDon't bring me down, I pray\nOh, pretty baby\nNow that I found you, stay\nAnd let me love you, baby\nLet me love you\n\nYou're just too good to be true\nCan't keep my eyes off you\nYou feel like heaven to touch\nI wanna hold you so much\nAt long last love has arrived\nAnd I thank God I'm alive\nYou're just too good to be true\nCan't take my eyes off you\n\nI love you, baby\nAnd if it's quite all right\nI need you, baby\nTo warm the lonely nights\nI love you, baby\nTrust in me when I say\nOh, pretty baby\nDon't bring me down, I pray\nOh, pretty baby\nNow that I found this day\nLet me love you, baby\nLet me love you"
    },
    {
        "name": "Coma",
        "album": "B-sides",
        "lyrics": "Confide in me\nSustain on my apathy\nYou're such a mess\nYou can learn not to confess\n\nYou will not find it in me\nSimply because I can't\nWake up and find it in me\nI'm in a coma\n\nYou will not find it in me\nYou'll reveal all your pains again\n\nWe'll fall asleep\nSo deeply out of reach\nFor years feeling dead\nWe can fall right out of bed\n\nYou will not find it in me\nSimply because I can't\nWake and find it in me\nI'm in a coma\n\nYou will not find it in me\nYou'll reveal all your pains again\nHey such a mess but I don't care\nSimply because I can't\nWake and find it in me\nI'm in a coma\n\nYou will not find it in me \nYou'll reveal all your pains again"
    },
    {
        "name": "Con-Science",
        "album": "B-sides",
        "lyrics": "I can't pretend\nChoose how it ends\nYou slipped away\nQuestions you to say\n\nIn fear\nIn sorrow\nIn fear\nIn sorrow\n\nI can't pretend\nConsumed by an ends\nTry bend the rules\nRibs out the cruels\n\nIn fear\nIn sorrow\nIn fear\nIn sorrow\n\nI can't pretend\nChoose how it ends\nYou slipped away\nQuestions you to stay\n\nIn fear\nIn sorrow\nIn fear\nIn sorrow"
    },
    {
        "name": "Crying Shame",
        "album": "B-sides",
        "lyrics": "Too Late\nAnd yeah baby it's too late\nAnd time has made the spell obey\nAnd now it's time to desecrate\n\nBut we had a dream\nAnd it was meant to be\nAnd we were kissing gods\nAgainst all the odds\n\nNow it's a crying shame\nAnd it's a crying shame\nWe don't know who to blame\nIt'll never be the same\nAnd it's a crying shame\n\nToo much\nAnd we demolish too much\nAnd yeah we really fucked it up\nYeah baby you lost your touch\n\nBut we had a dream\nAnd it was meant to be\nAnd we were kissing gods\nAgainst all the odds\n\nNow it's a crying shame\nAnd it's a crying shame\nYou don't know who to blame\nIt'll never be the same\nAnd it's a crying shame\n\nAnd it's a crying shame"
    },
    {
        "name": "Do We Need This",
        "album": "B-sides",
        "lyrics": "Too many young and too many old\nToo many people left you in the cold\nYou want everything to change\nCause you are afraid of losing\n\nShe only exists when she's on the screen\nHe's only alive inside a machine\nWe want everything to change\n'Cause we are afraid of losing\n\nTell me do you really need this\nTell me do you really care\nTell me do you really need this\nTell me do you really care\nI don't think you really need this\nI don't think you really care\nI don't think you really need this\nI don't think you really care\n\nToo many young and too many old\nTo many people left in the cold\nWe want everything to change\nNow I'm so afraid of losing\nYeah yeah yeah"
    },
    {
        "name": "Easily",
        "album": "B-sides",
        "lyrics": "Oh ...\n\nLet your inhibitions go\nMake every touch electrical\nWhen you're feeling beautiful\nWill you remember me?\n\nI want to touch you deep inside\nAnd find the secrets that you hide\nWhen you fears are cast aside\nWill you remember me?\n\nEasily forgotten love\nEasily forgotten love\nIt's not so easily\n\nI just want to let you know \nMy mind refuses to let you go\nI wanna hypnotise you so\nYou will remember me\n\nEasily forgotten love\nEasily forgotten love\nIt's not so easily\n\nEasily forgotten love\nEasily forgotten love\nEasily the best I ever had\nEasily the best I ever had"
    },
    {
        "name": "Eternally Missed",
        "album": "B-sides",
        "lyrics": "Chase your dreams away\nGlass needles in the hay\nThe sun forgives the clouds\nYou are my holy shroud\n\nI just don't care if it's real\nThat won't change how it feels\nI just don't care if it's real\nThat won't change how it feels\n\nNo it doesn't change\nAnd you can't resist\nMaking me feel eternally missed\nAnd you can't resist\nAnd you can't resist\nMaking me feel\n\nChase your dreams away\nGlass needles in the hay\nThe sun forgives the clouds\nYou are my holy shroud\n\nAnd I just don't care if it's real\nThat won't change how it feels\nI just don't care if it's real\nThat won't change how it feels\n\nNo it doesn't change\nAnd you can't resist\nMaking me feel eternally missed\nYou can't resist\nYou can't resist\nMaking me feel\n\nYou can't resist\nMaking me feel eternally missed\nYou can't resist\nYou can't resist\nMaking me feel\nAnd you can't resist\nMaking me feel eternally missed\nAnd you can't resist\nAnd you can't resist\nMaking me feel\n\n(Distorted whisper)\nChase your dreams away\nThere's needle's in the hay\nThe sun forgives the clouds\nYou are my holy shroud"
    },
    {
        "name": "Forced In",
        "album": "B-sides",
        "lyrics": "Push me in\nInto greed\nForce me in\nInto greed\nSqueeze me in\nInto greed\n\nAh ooh\nAh ooh"
    },
    {
        "name": "Fury",
        "album": "B-sides",
        "lyrics": "You're so happy now\nBurning the candle at both ends\nYour self loving soothes\nAnd softens the blows you've invented\n\nBreathe in deep\nAnd cleanse away our sins\nAnd we'll pray\nThat there's no God to punish us\nAnd make a fuss\n\nCracks healing up\nThe future soul forgives this mess\nYou waste twenty years\nAnd wind up alone demented\n\nBreathe in deep\nAnd cleanse away our sins\nAnd we'll pray\nThat there's no God to punish us\nAnd make a fuss\n\nBreathe in deep\nAnd cleanse away our sins\nAnd we'll pray\nThat there's no God to punish us\nAnd make a fuss"
    },
    {
        "name": "Futurism",
        "album": "B-sides",
        "lyrics": "Ignorance pulls\nApostasy and apathy still rules\nYeah you know it's cool\nJust suck and see\nA future turn us into silent gods\nAnd I won't miss you at all\n\nGrounded\nBoxed in\nLike the evil in your veins\nGrounded\nBoxed in\nI am stuck with you\n\nFate can't decide\nAlignment of the plan is in your hands\nCome on crush our plans\nJust suck and see\nA future that won't let you disagree\nAnd I won't miss you at all\n\nGrounded\nBoxed in\nLike the evil in your veins\nGrounded\nBoxed in\nI am stuck with you\n\nFeel it, hear it, apathy\nSee it, be it, you'll see"
    },
    {
        "name": "Glorious",
        "album": "B-sides",
        "lyrics": "Rose-tinted view \nAnd satellites that compromise the truth\nBut I wanted more, with the cuts and the bruises\nTouch my face, a hopeless embrace\n\nFaith\nDrives me away\nBut it turns me on\nLike a strangers love\nIt rockets through the universe\nIt fuels the lies, it feeds the curse\nBelieves we could be \nGlorious\n\nI need to believe\n\nBut I still want more, with the cuts and the bruises\nDon't close the door, on what you adore\n\nFaith\nDrives me away\nBut it turns me on\nLike a strangers love\nIt rockets through the universe\nIt fuels the lies, it feeds the curse\nBelieves we could be \nGlorious"
    },
    {
        "name": "The Groove",
        "album": "B-sides",
        "lyrics": "So here it goes again\nRape and pillage proves\nTo win the public vote\n\nSomeone tell me who will take the prize\nAnd who takes the fall\n\nSo confused\nWhen you're lost in the groove\nSo confused\nWhen you're lost in the groove\n\nAnd downtown comes again\nAnd her masks are shifting like a chameleon\nSomeone tell me why she breaks my fall\nAnd then breaks my heart\n\nSo confused\nWhen you're lost in the groove\nSo confused\nWhen you're lost in the groove\n\nWow\n\nSo confused\nWhen you're lost in the groove\nSo confused\nWhen you're lost in the groove"
    },
    {
        "name": "Host",
        "album": "B-sides",
        "lyrics": "I've read you well \nI just want to get away \n'Cause you used my love \nI just need to get away\n\nMy trust in you has been abused \nMy trust in you has been overused\n\nSick of this space \nWish we could be far away \n'Cause I wasted all my youth \nI'll never see it again\n\nMy trust in you has been abused \nMy trust in you has been overused\n\nI will welcome you to everything\n'Cause you've bled me dry now\nI just want to run away\n'Cause you've bled me dry now\nI just want to run away\n\nI just wanted too much \nI wish we could be far away \nAnd if my wish comes true \nYou'll never see me again"
    },
    {
        "name": "Hyper Chondriac Music",
        "album": "B-sides",
        "lyrics": "Your golden lies feed my role \nIn this forgotten space race under my control \nWho's returned from the dead? \nWho remains?\n\nYou wanted more than I was worth \nYou think I was scared yeah \nAnd you needed proof \nWho really cares anymore? \nWho restrains?\n\nI don't love you and I never did \nI don't love you and I never will"
    },
    {
        "name": "Jimmy Kane",
        "album": "B-sides",
        "lyrics": "Jimmy Kane can't sleep at night\nSex and pain\nKeeps me alive\nYou can't confuse yourself\nMimicking no one else\nYou can't fake it\nYou will never make it\nYou can't confuse yourself\nMimicking no one else\nYou can't fake it\nYou will never make it\nYeah\n\nYou're to blame\nFor everything\nSex and pain\nKeeps moving me\nKeeps me\n\nYou can't confuse yourself\nMimicking no one else\nYou can't fake it\nYou will never make it\nYou can't confuse yourself\nMimicking no one else\nYou can't fake it\nYou will never make it\nYeah"
    },
    {
        "name": "Map of Your Head",
        "album": "B-sides",
        "lyrics": "I'm sick of feeding my soul\nTo people who'll never know\nJust how purposeless and empty they've grown\nBecause their language confuses\nLike computers refuse\nTo understand how I'm feeling today\n\nI'm freezing\nAnd losing my way\nI don't need another map of your head\nI am freezing\nAnd losing my way\nI don't need another map of your head\n\nI saw a liquid control\nThat gives life to us all\nI hit my head on it\nAnd woke up to know\nThat I was all alone\nWearing just socks and a phone\nSomeone screaming like their world might explode\n\nYeah I'm freezing\nAnd losing my way\nI don't need another map of your head\nI'm freezing \nAnd losing my way\nI don't want another map of your head\n\nFreezing\nAnd losing my way\nI don't want another map of your head\nI'm freezing\nAnd losing my way\nI don't need another map of your head\nYeah"
    },
    {
        "name": "Nature 1",
        "album": "B-sides",
        "lyrics": "Conforming on a Monday \nToo often and too cold \nBut you aren't even listening \nBecause you are just \n\nToo old to feel an earthquake \nOr too cool to even care \nBut you aren't even listening \nSo why should I? \n\nYou are \nA natural disaster \nAnd I've wanted you too much \nAnd now I'm gonna lose \nI've wanted you too much \nAnd now I've gotta choose \n\nYou're the cause of all this \nAnd I'm sick of trying to please you \nAnd you're gonna feel my emotions coming \nBecause you're the world \n\nLike a broken dam you're empty \nAnd all that's left are the sticks and stones \nThat were built by other people \nAnd it really shows \nBut you aren't even listening \nBecause you are just \n\nToo old to feel an earthquake \nOr too cool to even care \nBut you aren't even listening \nSo why should I? \n\nYou are \nA natural disaster \nAnd I've wanted you too much \nAnd now I'm gonna lose \nI've wanted you too much \nAnd now I've gotta choose \n\nYou're the cause of all this \nAnd I'm sick of trying to please you \nAnd you're gonna feel my emotions coming \nBecause you're the world"
    },
    {
        "name": "Neutron Star Collision (Love Is Forever)",
        "album": "Other and Unreleased",
        "lyrics": "I was searching you were on a mission\nThen our hearts combined like a neutron star collision\nI have nothing left to lose. You took your time to choose\nThen we told each other with no trace of fear that\n\nOur love would be forever\nAnd if we die, we die together\nWell I, I said never\n'Cause our love would be forever\n\nThe world is broken, halos fail to glisten\nWe try to make a difference, but no one wants to listen\nHail the preachers, fake and proud. Their doctrines will be cloud\nThen they'll dissipate like snowflakes in an ocean\n\nLove is forever\nAnd we'll die, we'll die together\nWell I, I said never\n'Cause our love could be forever\n\nNow I've got nothing left to lose\nYou take your time to choose\nI can tell you now without a trace of fear\n\nThat my love will be forever\nAnd we'll die, we'll die together\nWill I, I will never\n'Cause our love will be forever"
    },
    {
        "name": "Pink Ego Box",
        "album": "B-sides",
        "lyrics": "It's gonna be ok\nCan't afford another day\nAt 50 bytes per second\n\nI've never seen your face\nI've never heard your voice\n\nBut I think I like it\nWhen you instant message me\nWith a promise\nI can feel it\nI can tell you're gonna be\nJust like me\n\nMy eyes are gonna strain\nMy heart is feeling pain\nAt 50 beats per second\n\nI've never seen your eyes\nI've never heard your lies\n\nBut I think I like it\nWhen you instant message me\nWith a promise\nI can feel it\nI can tell you're gonna be\nJust like me\nJust like me\n\nYou tell\nYou tell\nYou turn on me"
    },
    {
        "name": "Prague",
        "album": "B-sides",
        "lyrics": "It breaks my heart\nTo leave you far behind\nIt breaks me up\nTo leave so suddenly\nKnowing we might never\nMeet again\nIt hurts so much\nTo lose another friend\nI could hope you're just as sad\nTo see me go\n\nBut I'd hate to be the cause\nOf grief to someone I like so\nKnowing we might never\nMeet again\nIt hurts so much\nTo lose another friend."
    },
    {
        "name": "Recess",
        "album": "B-sides",
        "lyrics": "Resuscitate \nIn my sleep \nAwake to see \nYou're never here\n\nAnd the losing yields \nAnother year \nFacing hopes and fears\n\nAnd I wish \nI could believe there was more \nHopes suffocating \nYou've kissed my life\n\nAnd the planes and trains \nAre to blame \nFor tempting us \nTo refrain \nAnd to cut the chord \nDis every word \nOf the truths absurd\n\nAnd I wish \nI could believe there was more \nHopes suffocating \nYou've kissed my life\n\n(And I wish\nI could believe there was more)\nHopes suffocating \nHopes suffocating \nHopes suffocating \nAnd you've kissed my life"
    },
    {
        "name": "Shine",
        "album": "B-sides",
        "lyrics": "Who cares for the life we've earned?\nSomeone's sold all the truth you've earned.\nRemember when we used to shine\nAnd had no fear or sense of time\nWhen it creeps up on you\n\nYou can't cry now there's nothing to feel.\nNo one's noticed our loneliness.\nRemember when you should have teased\nAnd made us scream eternal time.\n\nI believed that you'd always be here\n'Cause once you promised a life with no fear.\nPlease don't break my ideals\nAnd say what's fake was always real.\nI was ...\nTake me back again."
    },
    {
        "name": "Shrinking Universe",
        "album": "B-sides",
        "lyrics": "Cast your ideals on to me \nAnd I'll show you what you really need \nGive too much attention \nAnd I'll reflect your imperfections\n\nCan't you see it's over \nBecause you're the God of a shrinking universe\n\nPurposeless survival \nNow there's nothing left to die for \nSo don't struggle to recognize \nNow the cruelly heart-felt suicide\n\nCan't you see it's over \nBecause you're the God of a shrinking universe\n\nCan't you see it's over \nBecause you're the God of a shrinking universe"
    },
    {
        "name": "Spiral Static",
        "album": "B-sides",
        "lyrics": "Who's ever known\nHow much to moan and groan\nAnd quiver inside\nHe needs to give you\nEverything you need\nIs it enough\n\nYou're running out of time\nAs it grows in your eye\nFeel broken inside you feel\n\nSigh, static moans\nA storm growing strong\nAnd it's coming my way\nStill she gives you\nEverything you need\nIs it enough\n\nYou're running out of time\nAs it grows in your eye\nYou'll feel broken inside\nYou'll feel\nAnd I'll feel broken inside you\n\nFeel ..."
    },
    {
        "name": "Twin",
        "album": "B-sides",
        "lyrics": "Your warmth\nYour warmth is so deep\nYour gaze beams a hole into me \n\nControlling again \nUnseparated twins \nControlling again \n\nYou've sucked \nAll the breath out of me \nYou'll squeeze all the life out of me\n\nControlling again \nUnseparated twins \nControlling again \n\nControlling again \nUnseparated twins \nYou might've been\n\nCome gentle slowly\nDown tonight"
    },
    {
        "name": "Who Knows Who",
        "album": "B-sides",
        "lyrics": "Money men mill about Monday morning\nAnother new nothing and never nearer\nAssumed at the cost that it's currently costing\nI dare don't dig any deeper down\nI don't have the head space.\n\nI don't understand all the figures and facts\nIt'll spin round till I start panic attacking\nBut there's one curve ball that states my soul\nLet me live out life and I'll stay in control.\n\nYou take that away, I'll never get dressed\nMoney men milling in, Monday morning\nI will go spend, or I will raise warning\nI'm nothing but me and mine, so.\n\nYeah I've been and gone\nWith who knows who\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power.\n\nYeah I've been and gone\nWith who knows who\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power.\n\nMy name's magic and it's mud\nI do bad things, but I can't rob\nThey don't buy anything, they watch it\nSee, for their time is the commodity\n\nThe gap between art and artists grows\nI'll never know why I ever wrote this prose\nI write this rubbish, but believe you me\nI've just never been keen on tasting redness\n\nBut put the orange suit on\nShackle my ankles\nI couldn't take that, I'd be fucking...\n\n(Get it Off!)\n\nYeah I've been and gone\nWith who knows who\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power.\n\nYeah I've been and gone\nWith who knows who\n\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power.\n\nI don't promote no violence\nBut if you all get carted off\nBoys will be boys, toys'll get tossed\nBang me up, right and rough\nI'm not a people beater but\nIf that law gets made up, I may\nShow me the cross, and I'll take it on\nShow me the cross, and I'll take it on\n\nI don't promote no violence\nBut if you all get carted off\nBoys will be boys, toys'll get tossed\nBang me up, right and rough\nI'm not a people beater but\nIf that law gets made up, I may\nShow them the cross, and I'll take it on\nShow them the cross, and I'll take it on\n\n(Don't go! No!)\n\nTell me what you want\nTell me what you want\nTell me what you want\nTell me what you want\n\nTell me what you want\nTell me what you want\nTell me what you want\nTell me what you want\n\nYeah I've been and gone\nWith who knows who\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power.\n\nYeah I've been and gone\nWith who knows who\nDoing God knows what\nDon't tell me how\nI'll return at any hour\nFuck all your law, fuck your power."
    },
    {
        "name": "Yes Please",
        "album": "B-sides",
        "lyrics": "Ha, ha, ha, ha\n\nJump on my pleasure pill?\nYes, please\n\nI cannot sleep\nThere's too much noise in my head\nI cannot sleep\nI want it here instead\n\nI never thought that this could come to this\nI just wanna live my dreaded bliss in peace now\nYou will never miss\nBut I can\n\nI can not keep\nThe shame that's clawed us out\nI will not keep\nYour shut-up, shut-up lies\n\nI never thought that this could come to this\nI just wanna live my dreaded bliss in peace now\nYou will never miss\nBut I can"
    },
    {
        "name": "In Your World",
        "album": "Other and Unreleased",
        "lyrics": "I'm hurting you again\nTo lonely to pretend\nLike everything is new\nI promise you to\nBlow it all away\n\nIn your world\nNo one is crying alone\nIn your world\nNo one is dying alone\n\nToo broken to belong\nToo weak to sing along\nI'll comfort you my friend\nHelping you to\nBlow it all away\n\nIn your world\nNo one is crying alone\nIn your world\nNo one is dying alone"
    },
    {
        "name": "Uprising",
        "album": "The Resistance",
        "lyrics": "Paranoia is in bloom\nThe P.R. transmissions will resume\nThey'll try to push drugs that keep us all dumbed down\nAnd hope that we will never see the truth around (so come on)\n\nAnother promise, another seed\nAnother packaged lie to keep us trapped in greed\nAnd all the green belts wrapped around our minds\nAnd endless red tape to keep the truth confined (so come on)\n\nThey will not force us\nThey will stop degrading us\nThey will not control us\nWe will be victorious (so come on)\n\nInterchanging mind control\nCome let the revolution take its toll\nIf you could flick a switch and open your third eye\nYou'd see that we should never be afraid to die (so come on)\n\nRise up and take the power back\nIt's time the fat cats had a heart attack\nYou know that their time's coming to an end\nWe have to unify and watch our flag ascend (so come on)\n\nThey will not force us\nThey will stop degrading us\nThey will not control us\nWe will be victorious (so come on)\n\nHey, hey, hey, hey\nHey, hey, hey, hey\nHey, hey, hey, hey\n\nThey will not force us\nThey will stop degrading us\nThey will not control us\nWe will be victorious (so come on)\n\nHey, hey, hey, hey"
    },
    {
        "name": "Resistance",
        "album": "The Resistance",
        "lyrics": "Is our secret safe tonight and are we out of sight?\nOr will our world come tumbling down?\nWill they find our hiding place? Is this our last embrace?\nOr will the walls start caving in?\n\n(It could be wrong, could be wrong)\nBut it should've been right\n(It could be wrong, could be wrong)\nTo let our hearts ignite\n(It could be wrong, could be wrong)\nAre we digging a hole?\n(It could be wrong, could be wrong)\nThis is out of control\n\n(It could be wrong, could be wrong)\nIt could never last\n(It could be wrong, could be wrong)\nMust erase it fast\n(It could be wrong, could be wrong)\nBut it could've been right\n(It could be wrong, could be)\n\nLove is our resistance\nThey'll keep us apart and they won't stop breaking us down\nAnd hold me\nOur lips must always be sealed\n\nIf we live our life in fear, I'll wait a thousand years\nJust to see you smile again\nQuell your prayers for love and peace, you'll wake the thought police\nWe can hide the truth inside\n\n(It could be wrong, could be wrong)\nBut it should've been right\n(It could be wrong, could be wrong)\nTo let our hearts ignite\n(It could be wrong, could be wrong)\nAre we digging a hole?\n(It could be wrong, could be wrong)\nThis is out of control\n\n(It could be wrong, could be wrong)\nIt could never last\n(It could be wrong, could be wrong)\nMust erase it fast\n(It could be wrong, could be wrong)\nBut it could've been right\n(It could be wrong, could be)\n\nLove is our resistance\nThey'll keep us apart and they won't stop breaking us down\nHold me\nOur lips must always be sealed\n\nThe night has reached its end\nWe can't pretend\nWe must run\nWe must run\nIt's time to run\n\nTake us away from here\nProtect us from further harm\nResistance"
    },
    {
        "name": "Undisclosed Desires",
        "album": "The Resistance",
        "lyrics": "I know you've suffered\nBut I don't want you to hide\nIt's cold and loveless\nI won't let you be denied\n\nSoothing\nI'll make you feel pure\nTrust me\nYou can be sure\n\nI want to reconcile the violence in your heart\nI want to recognize your beauty's not just a mask\nI want to exorcise the demons from your past\nI want to satisfy the undisclosed desires in your heart\n\nYou trick your lovers\nThat you're wicked and divine\nYou may be a sinner\nBut your innocence is mine\n\nPlease me\nShow me how it's done\nTease me\nYou are the one\n\nI want to reconcile the violence in your heart\nI want to recognize your beauty's not just a mask\nI want to exorcise the demons from your past\nI want to satisfy the undisclosed desires in your heart\n\nPlease me\nShow me how it's done\nTrust me\nYou are the one\n\nI want to reconcile the violence in your heart\nI want to recognize your beauty's not just a mask\nI want to exorcise the demons from your past\nI want to satisfy the undisclosed desires in your heart"
    },
    {
        "name": "United States of Eurasia",
        "album": "The Resistance",
        "lyrics": "You and me are the same\nWe don't know or care who's to blame\nBut we know that whoever holds the reigns\nNothing will change, our cause has gone insane\n\nAnd these wars, they can't be won\nAnd these wars, they can't be won\nAnd do you want them to go on and on and on?\nWhy split these states when there can be only one?\n\nAnd must we do as we're told?\nMust we do as we're told?\n\nYou and me fall in line\nTo be punished for unproven crimes\nAnd we know that there's no one we can trust\nOur ancient heroes, they are turning to dust\n\nAnd these wars, they can't be won\nDoes anyone know or care how they begun?\nThey just promise to go on and on and on\nBut soon we will see there can be only one\n\nUnited States...\nUnited States of...\n\nEura- (-sia, -sia, -sia, -sia)\nEura- (-sia, -sia, -sia, -sia)\nEura- (-sia, -sia, -sia, -sia)"
    },
    {
        "name": "Guiding Light",
        "album": "The Resistance",
        "lyrics": "Impure hearts stumble\nIn my hands they crumble\nAnd fragile and stripped to the core\nI can't hurt you anymore\n\nLoved by numbers\nYou're losing life's wonder\nTouch like strangers detached\nI can't feel you anymore\n\nThe sunshine trapped in our hearts\nIt could rise again\nBut I'm lost, and crushed, and cold, and confused\nWith no guiding light left inside\n\nYou were my guiding light\n\nWhen comfort and warmth can't be found\nI still reach for you\nBut I'm lost, and crushed, and cold, and confused\nWith no guiding light left inside\n\nYou're my guiding light\nYou're my guiding light\n\nWhen there's no guiding light left inside\nWhen there's no guiding light in our lives"
    },
    {
        "name": "Unnatural Selection",
        "album": "The Resistance",
        "lyrics": "They'll laugh as they watch us fall\nThe lucky don't care at all\nNo chance for fate\nIt's unnatural selection\nI want the truth\n\nI'm hungry for some unrest\nI wanna push it beyond a peaceful protest\nI wanna speak in a language that they will understand\nDedication to a new age\nIs this the end of destruction and rampage?\nAnother chance to erase and then repeat it again\n\nCounter balance this commotion\nWe're not droplets in the ocean\nOcean\n\nThey'll laugh as they watch us fall\nThe lucky don't care at all\nNo (hey) chance (hey) for fate (hey)\nIt's unnatural selection\nI want the truth\n\nNo religion or mind virus\nIs there a hope that the facts would ever find us\nJust make sure that you are looking out for number one\nAnd I'm hungry for some unrest\nWell, let's push it beyond a peaceful protest\nI wanna speak in a language that you will understand\n\nCounter balance this commotion\nWe're not droplets in the ocean\nOcean\n\nThey'll laugh as they watch us crawl\nThe lucky don't share at all\nNo (hey) chance (hey) for fate (hey)\nIt's a random chance selection\nI want the truth\n\nTry to ride out the storm\nWhilst they'll make you believe\nThat they are the special ones\n\n(We have not been chosen)\n\nInjustice is the norm\nYou won't be the first\nAnd you know that you won't be the last\n\nCounter balance this commotion\nWe're not droplets in the ocean\nOcean, ocean, ocean\n\nThey'll laugh as they watch us fall\nAnd the lucky they don't care at all\nNo (hey) chance (hey) for fate (hey)\nIt's unnatural selection\nI want the truth\nI want the truth\nI want the truth\nI want the truth"
    },
    {
        "name": "MK ULTRA",
        "album": "The Resistance",
        "lyrics": "The wavelength gently grows,\nCoercive notions re-evolve,\nA universe is trapped inside a tear!\n\nIt resonates the core,\nCreates unnatural laws,\nReplaces love and happiness with fear!\n\nHow much deception can you take?\nHow many lies will you create?\nHow much longer until you break?\nYour mind's about to fall...\n\nAnd they're breaking through\nThey're breaking through\nThey're breaking through\n(We are losing control)\n\nThey're breaking through\nThey're breaking through\nAnd they are breaking through,\nThey are breaking through,\nNow we're falling,\nWe are losing control\n\nInvisible to all,\nThe mind becomes a wall;\nAll of history deleted with one stroke!\n\nHow much deception can you take?\nHow many lies will you create?\nHow much longer until you break?\nYour mind's about to fall...\n\nAnd they are breaking through,\nThey are breaking through,\nNow we're falling,\nWe are losing control"
    },
    {
        "name": "I Belong to You",
        "album": "The Resistance",
        "lyrics": "When these pillars get pulled down\nIt will be you who wears the crown\nAnd I'll owe everything to you\n\nOoh-ooh-ooh-ooh-ooh-ooh oh oh\nOoh-ooh-ooh-ooh-ooh-ooh\n\nHow much pain has cracked your soul?\nHow much love would make you whole?\nYou're my guiding lightning strike\n\nI can't find the words to say\nThey're overdue\nI've traveled half the world to say\nI belong to you\n\nOoh-ooh-ooh-ooh-ooh-ooh oh oh\nOoh-ooh-ooh-ooh-ooh-ooh\n\nThen she attacks me like a Leo\nWhen my heart is split like Rio\nBut I assure you my debts are real\n\nI can't find the words to say\nWhen I'm confused\nI traveled half the world to say\nYou are my mu...\n\nOoh-ooh-ooh-ooh-ooh-ooh oh oh\nOoh-ooh-ooh-ooh-ooh-ooh-ooh-ooh oh oh\n\nAh! R&#xE9;ponds, r&#xE9;ponds &#xE0; ma tendresse\nVerse-moi, verse-moi l'ivresse\nR&#xE9;ponds &#xE0; ma tendresse\nR&#xE9;ponds &#xE0; ma tendresse\nAh, verse-moi l'ivresse\n\nVerse-moi, verse-moi l'ivresse\nR&#xE9;ponds &#xE0; ma tendresse\nR&#xE9;ponds &#xE0; ma tendresse\nAh, verse-moi l'ivresse\n\nI belong\nI belong\nTo you alone\n\nOoh-ooh-ooh-ooh-ooh-ooh oh oh\nOoh-ooh-ooh-ooh-ooh-...se\n\nOoh, I can't find the words to say\nThey're overdue\nTraveled half the world to say\nI belong to you\n\nOoh-ooh-ooh-ooh-ooh-ooh oh oh\nOoh-ooh-ooh-ooh-ooh-ooh-ooh-ooh-oh"
    },
    {
        "name": "Supremacy",
        "album": "The 2nd Law",
        "lyrics": "Wake to see\nYour true emancipation is a fantasy\nPolicies\nHave risen up and overcome the brave\n\nGreatness dies\nUnsung and lost, invisible to history\nEmbedded spies\nBrainwashing our children to be mean\n\nYou don't have long\nI am on to you\nThe time, it has come\nTo destroy\n\nYour supremacy\nSupremacy\n\nYou don't have long\nI am on to you\nThe time, it has come\nTo destroy\n\nYour supremacy\nSupremacy"
    },
    {
        "name": "Madness",
        "album": "The 2nd Law",
        "lyrics": "M-m-m-m-m-m-m-m-mad, mad, mad\nM-m-m-m-m-m-m-m-mad, mad, mad\nM-m-m-m-m-m-m-m-mad, mad, mad\nM-m-m-m-m-m-m-m-mad, mad, mad\n\nI, I can't get these memories\nOut of my mind\nAnd some kind of madness\nIs starting to evolve\n(M-m-m-m-m-m-m-m-mad, mad, mad)\nOoh\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n\nAnd I, I tried so hard to let you go\nBut some kind of madness\nIs swallowing me whole\n(M-m-m-m-m-m-m-m-mad, mad, mad)\nYeah\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n\nI have finally seen the light\nAnd I have finally realized\nWhat you mean\nHuh, huh, huh, huh-huh-huh, oh\n\nAnd now\nI need to know is this real love\nOr is it just madness\nKeeping us afloat?\n(M-m-m-m-m-m-m-m-mad, mad, mad)\nMmm\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n\nBut when I look back\nAt all the crazy fights we had\nIt's like some kind of madness\nWas taking control\n(M-m-m-m-m-m-m-m-mad, mad, mad)\nYeah\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n\nNow, I have finally seen the light\nAnd I have finally realized\nWhat you need\nMmm, mmm, mmm, mmm-mmm-mmm, mmm\n\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n\nAnd now, I have finally seen the end (Finally seen the end)\nAnd I'm not expecting you to care (Expecting you to care)\nThat I have finally seen the light (Finally seen the light)\nAnd I have finally realized (Realized)\n\nI need your love\nI need your love\n\nCome to me\nJust in a dream\nCome on and rescue me\nYes, I know\nI can't be wrong\nAnd baby, you're too headstrong\nOur love is\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n(M-m-m-m-m-m-m-m-mad, mad, mad)\n(M-m-m-m-m-m-m)\nMadness"
    },
    {
        "name": "Panic Station",
        "album": "The 2nd Law",
        "lyrics": "You won't get much closer\nUntil you sacrifice it all (all)\nYou won't get to taste it\nWith your face against the wall (wall wall)\n\nGet up and commit\nShow the power trapped within (in in)\nDo just what you want to\nAnd now stand up and begin\n\nOoh, 1, 2, 3, 4, fire's in your eyes\nAnd this chaos, it defies imagination\nOoh, 5, 6, 7, minus 9 lives\nYou've arrived at panic station\n\nDoubts will try to break you\nUnleash your heart and soul (soul)\nTrouble will surround you\nStart taking some control\n\nStand up and deliver\nYour wildest fantasy\nDo what the fuck you want to\nThere's no one to appease\n\nOoh, 1, 2, 3, 4, fire's in your eyes\nAnd this chaos, it defies imagination\nOoh, 5, 6, 7, minus 9 lives\nYou've arrived at panic station\n\nOoh, 1, 2, 3, 4, fire's in your eyes\nAnd this chaos, it defies imagination\nOoh, 5, 6, 7, minus 9 lives\nAnd I know that you will fight for the duration\n\nOoh, 1, 2, 3, 4, fire's in your eyes\nAnd you know I'm not resisting your temptations\nOoh, 5, 6, 7, minus 9 lives\nYou've arrived at panic station"
    },
    {
        "name": "Survival",
        "album": "The 2nd Law",
        "lyrics": "Race\nLife's a race\nThat I'm gonna win\nYes, I'm gonna win\nAnd I'll light the fuse\nAnd I'll never lose\nAnd I choose to survive\nWhatever it takes\nYou won't pull ahead\nI'll keep up the pace\nAnd I'll reveal my strength\nTo the whole human race\nYes, I am prepared\nTo stay alive\nI won't forgive\nVengeance is mine\nAnd I won't give in\nBecause I choose to thrive\nYeah, I'm gonna win\n\nRace\nIt's a race\nThat I'm gonna win\nYes, I'm gonna win\nAnd I will light the fuse\nAnd I'll never lose\nAnd I choose to survive\nWhatever it takes\nYou won't pull ahead\n'Cause I'll keep up the pace\nAnd I'll reveal my strength\nTo the whole human race\nYes, I'm gonna win\n\n(Fight, fight, fight, fight\nWin, win, win, win)\n\nYes, I'm gonna win"
    },
    {
        "name": "Follow Me",
        "album": "The 2nd Law",
        "lyrics": "When darkness falls\nAnd surrounds you \nWhen you fall down \nWhen you're scared and you're lost\nBe brave\nI'm coming to hold you now \nWhen all your strength has gone \nAnd you feel wrong like your life has slipped away \n\nFollow me\nYou can follow me\nAnd I, I will not desert you now\nWhen your fire's died out\nNo one's there\nThey have left you for dead\n\nFollow me\nYou can follow me\nI will keep you safe\nFollow me\nYou can follow me\nI will protect you\n\nI won't let them hurt\nHurt you, no\nOoh yeah\nWhen your heart is breaking\n\nYou can follow me\nYou can follow me\nI will always keep you safe\nFollow me\nYou can trust in me\nI will always protect you, my love\n\nFeel my love\nFeel my love"
    },
    {
        "name": "Animals",
        "album": "The 2nd Law",
        "lyrics": "Animal, you're an animal\nDon't take anything less\nOut of control, you're out of control\nStrike those in distress\n\nAnalyse, advertise, expand\nBend more rules\nAnd buy yourself an island\n\nAnimals, we're animals\nBuy when blood is on the street\nOut of control, we're out of control\nCrush those who beg at your feet\n\nAnalyse, franchise, spread out\nKill the competition\nAnd buy yourself an ocean\n\nAmortise, downsize, lay off\nKill yourself\nCome on and do us all a favour\n\n"
    },
    {
        "name": "Explorers",
        "album": "The 2nd Law",
        "lyrics": "Once I hoped\nTo seek the new and unknown\nThis planet's overrun\nThere's nothing left for you or for me\nDon't give in, we can\nWalk through the fields\nAnd feeling nature's glow\nBut all the land is owned\nThere's none left for you or for me\n\nWho will win?\n'Cause I concede\n\nFree me, free me\nFree me from this world\nI don't belong here\nIt was a mistake imprisoning my soul\nCan you free me\nFree me from this world\n\nA world lush in bloom\nWith rivers running wild\nThey'll be re-routed South\nWith none left for you or for me\nDon't give in and hear the\nEngines roar\nAnd save our crops from drought\nBut when the black gold's in doubt\nThere's none left for you or for me\n\nFuse helium-3\nOur last hope\n\nFree me, free me\nFree me from this world\nWe don't belong here\nIt was a mistake imprisoning our souls\nCan you free me\nFree me from this world\n\nFree me, I'll free you\nFree us from this world\nWe don't belong here\nIt was a mistake imprisoning our souls\nCan you free me\nFree me from this world\n\nRunning around in circles feeling caged by endless rules\nCan you free me\nFree me from this world\n\nGo to sleep"
    },
    {
        "name": "Big Freeze",
        "album": "The 2nd Law",
        "lyrics": "Healed or are you still just reeling?\nAre you fine, have you found a way to escape?\nAre you here just because I need you?\nCan we hole up, a big freeze is heading our way\n\nWe are on a hiding to nowhere\nWe still hope, but our dreams are not the same, no\nAnd I, I lost before I started\nI'm collapsing in stellar clouds of gas\n\nHear me\nWhat words just can't convey\nFeel me\nDon't let the sun in your heart decay\n\nFight or will you show me mercy?\nWe've expelled the goodness from our hearts\nAre you here just to prove you're winning?\nCan we hole up and ride out this electrical storm?\n\nWe destroyed something beautiful\nWe have faith, but our truths are not the same, no\nDon't give up, don't let the magic leave us\nStop the loneliest force becoming king of the universe\n\nHear me\nWhat words just can't convey\nFeel me\nDon't let the sun in your heart decay\n\nDon't give up, don't let the magic leave us\nWe're collapsing in stellar clouds of gas, yeah\n\nHear me\nWhat words just can't convey\nFeel me\nI won't let the sun in our hearts decay"
    },
    {
        "name": "Save Me",
        "album": "The 2nd Law",
        "lyrics": "Save me from my superstitions\nNow I'm free from this old condition\nWait just a while\nAnd I'll greet you with a smile\n\nHold me 'cause I'm sure I'm hated\nPromises, they are overrated\nWait just a while\nWhile I'm drowning in denial\n\nTurn me into someone like you\nFind a place that we can go to\nRun away and take me with you\nDon't let go, I need your rescue\n\nWatch me 'cause I'm on a mission\nHold me back so I'm forced to listen\nDon't let me go\n'Cause I'm nothing without you\n\nTurn me into someone like you\nFind a place that we can go to\nRun away and take me with you\nDon't let go, I need your rescue\n\nTurn me into someone like you\nFind a place that we can go to\nRun away and take me with you\nDon't let go, I need your rescue"
    },
    {
        "name": "Liquid State",
        "album": "The 2nd Law",
        "lyrics": "Take me for a ride\nBreak me up and steal what's left inside\nAnd hope and pray iniquity has died\nInside and left a scar\n\nI'm on red alert\nBring me peace and wash away my dirt\nSpin me round and help me to divert\nAnd walk into the light\n\nWarm my heart tonight\nAnd hold my head up high\nAnd help me to survive\n\nKick me when I'm down\nFeed me poison, fill me till I drown\nWake me up before I get pushed out\nAnd fall into the night\n\nWarm my heart tonight (force me to lose control)\nAnd hold my head up high (watch as I lose my soul)\nAnd help me to survive (push me until I fall)"
    },
    {
        "name": "The 2nd Law: Unsustainable",
        "album": "The 2nd Law",
        "lyrics": "All natural and technological processes proceed in such a way that the availability of the remaining energy decreases. \nIn all energy exchanges, if no energy enters or leaves an isolated system, the entropy of that system increases. \nEnergy continuously flows from being concentrated to becoming dispersed, spread out, wasted, and useless. \nNew energy cannot be created and high grade energy is being destroyed. \nAn economy based on endless growth is unsustainable\n\nUnsu-\nUnsustain, unsustain, unsu-\nUns, uns\nUnsustainer, unsustainer\nUnsu-\nUnsustain, unsustain, unsu-\nUns, uns\nYou're unsustainable\n\nUnsustainer, unsustainer, -sustainer\n\nThe fundamental laws of thermodynamics will place fixed limits on technological innovation and human advancement.\nIn an isolated system, the entropy can only increase.\nA species set on endless growth is unsustainable\n\nUnsu-\nUnsustain, unsustain, unsu-\nUns, uns\nUnsustainer, unsustainer\nUnsu-\nUnsustain, unsustain, unsu-\nUns, uns\nYou're unsustainable"
    },
    {
        "name": "The 2nd Law: Isolated System",
        "album": "The 2nd Law",
        "lyrics": "In an isolated system, entropy can only increase\n\nIn an isolated system, entropy can only increase\nIn an isolated system, entropy can only increase\nIn an isolated system\nIn an isolated system (entropy)\nIn an isolated system (entropy)\nIn an isolated system\nIsolated\nIsolated (system)\nIsolated\nIsolated system\nIsolated (entropy)\nIsolated\nIsolated\nIsolated"
    },
    {
        "name": "Sunburn",
        "album": "Showbiz",
        "lyrics": "Come waste your millions here\nSecretly she sneers\nAnother corporate show\nA guilty conscience grows\n\nAnd I'll feel\nA guilty conscience grow\nAnd I'll feel\nA guilty conscience grow\n\nShe burns like the sun\nAnd I can't look away\nAnd she'll burn our horizons\nMake no mistakes\n\nCome let the truth be shared\nNo one ever dared\nTo break these endless lies\nSecretly she cries\n\nShe burns like the sun\nAnd I can't look away\nAnd she'll burn our horizons\nMake no mistakes\n\nAnd I'll hide from the world\nBehind a broken frame\nAnd I'll run forever\nI can't face the shame\n\nAnd I'll hide from the world\nBehind a broken frame\nAnd I'll run forever\nI can't face the shame"
    },
    {
        "name": "Muscle Museum",
        "album": "Showbiz",
        "lyrics": "She had something to confess to\nBut you don't have the time so\nLook the other way\nYou will wait until it's over\nTo reveal what you'd never shown her\nToo little much too late\n\nToo long trying to resist it\nYou've just gone and missed it\nIt's escaped your world\n\nCan you see that I am needing\nBegging for so much more\nThan you could ever give\nAnd I don't want you to adore me\nDon't want you to ignore me\nWhen it pleases you\nYeah and I'll do it on my own\n\nI have played in every toilet\nBut you still want to spoil it\nTo prove I've made a big mistake\n\nToo long trying to resist it\nYou've just gone and missed it\nIt's escaped your world\n\nCan you see that I am needing\nBegging for so much more\nThan you could ever give\nAnd I don't want you to adore me\nDon't want you to ignore me\nWhen it pleases you\nYeah and I'll do it on my own\nI'll do it all by myself\nYou will never make it"
    },
    {
        "name": "Fillip",
        "album": "Showbiz",
        "lyrics": "It's happening soon, it's happening soon\nIts scent has been blowing in my direction\nTo me it is new, to me it is new\nAnd it's not gonna change for anybody\n\nAnd it's gonna be\nOur last memory\nAnd it's led me on\nAnd on to you\n\nIt's got to be here, it's got to be there\nIt's got to be now or I'll lose forever\nTo me it is strange, this feeling is strange\nBut it's not gonna change for anybody\n\nAnd it's gonna be\nOur last memory\nAnd it's led me on\nAnd on to you\n\nAccuse me\nTrust me, I never knew\nThat you were the one\nYou were the one\n\nAnd it's gonna be\nOur last memory\nAnd it's led me on\nAnd on to you\n\nAnd it's gonna be\nOur last memory\nAnd it's led me on\nAnd on to you"
    },
    {
        "name": "Falling Down",
        "album": "Showbiz",
        "lyrics": "I'm falling down\nAnd fifteen thousand people scream\nThey were all begging for your dream\nI'm falling down\nFive thousand houses burning down\nNo one is gonna save this town\n\nToo late\nI already found what I was looking for\nYou know it wasn't here\nNo, it wasn't here\n\nI was calling your name\nBut you would never hear me sing\nYou wouldn't let me begin\nSo I'm crawling away\n'Cause you broke my heart in two, yeah\nNo, I will not forget you\n\nToo late\nI already found what I was looking for\nYou know it wasn't you\nNo, it wasn't you, no\n\nFalling away\nYou would never see me through\nNo, I could not forget you\nFalling down\nA thousand houses burning down, yeah\nNo one is gonna save this town\n\nToo late\nI already found what I was looking for\nYou know it wasn't you\nNo, it wasn't you, no\n\nFalling down\nNow the world is upside down, yeah\nI'm heading straight for the clouds"
    },
    {
        "name": "Cave",
        "album": "Showbiz",
        "lyrics": "Leave me alone, it's nothing serious\nI'll do it myself, it's got naught to do with you\nAnd there's nothing that you could do\n\nYou can see it and you can almost hear it, too\nYou can almost taste it, it's got naught to do with you\nAnd there's still nothing that you could do\n\nSo come in my cave\nAnd I'll burn your heart away\nCome in my cave\nAnd I'll burn your heart away\n\nPlease close your ears and try to look away\nSo you'll never hear a, a single word I say\nAnd don't ever come my way\n\nLeave me alone, it's nothing serious\nI'll do it myself, it's got naught to do with you\nAnd there's still nothing that you could do\n\nSo come in my cave\nAnd I'll burn your heart away\nCome in my cave\nAnd arrest me for my mistakes, yeah"
    },
    {
        "name": "Showbiz",
        "album": "Showbiz",
        "lyrics": "Controlling my feelings for too long\nControlling my feelings for too long\n\nControlling my feelings for too long\nControlling my feelings for too long\nForcing our darkest souls to unfold\nAnd forcing our darkest souls to unfold\nAnd pushing us into self-destruction\nPushing us into self-destruction\n\nThey make me\nMake me dream your dreams\nThey make me\nMake me scream your screams\n\nTrying to please you for too long\nTrying to please you for too long\nIn visions of greed you wallow\nVisions of greed you wallow\nVisions of greed you wallow\nVisions of greed you wallow\n\nThey make me\nMake me dream your dreams\nThey make me\nMake me scream your screams\n\nControlling my feelings for too long\nControlling my feelings for too long\nAnd forcing my darkest soul to unfold\nAnd forcing our darkest souls to unfold\nAnd pushing us into self-destruction\nAnd pushing us into self-destruction\n\nThey make me\nMake me dream your dreams\nThey make me\nMake me scream your screams"
    },
    {
        "name": "Unintended",
        "album": "Showbiz",
        "lyrics": "You could be my unintended\nChoice to live my life extended\nYou could be the one I'll always love\n\nYou could be the one who listens\nTo my deepest inquisitions\nYou could be the one I'll always love\n\nI'll be there as soon as I can\nBut I'm busy mending broken\nPieces of the life I had before\n\nFirst there was the one who challenged\nAll my dreams and all my balance\nShe could never be as good as you\n\nYou could be my unintended\nChoice to live my life extended\nYou should be the one I'll always love\n\nI'll be there as soon as I can\nBut I'm busy mending broken\nPieces of the life I had before\n\nI'll be there as soon as I can\nBut I'm busy mending broken\nPieces of the life I had before\n\nBefore you"
    },
    {
        "name": "Uno",
        "album": "Showbiz",
        "lyrics": "This means nothing to me\n'Cause you are nothing to me\nAnd it means nothing to me\nThat you blew this away\n\n'Cause you could have been number one\nIf you'd only found the time\nAnd you could have ruled the whole world\nIf you'd had the chance\n\nYou could have been number one\nAnd you could have ruled the whole world\nAnd we could have had so much fun\nBut you blew it away\n\nYou're still nothing to me\nAnd this is nothing to me\nAnd you don't know what you've done\nBut I'll give you a clue\n\nYou could have been number one\nIf you'd only had the chance\nAnd you could have ruled the whole world\nIf you'd had the time\n\nYou could have been number one\nAnd you could have ruled the whole world\nAnd we could have had so much fun\nBut you blew it away\n\nAnd you could have been number one\nAnd you could have ruled the whole world\nAnd we could have had so much fun\nBut you blew it away"
    },
    {
        "name": "Sober",
        "album": "Showbiz",
        "lyrics": "Royal Canadian blended\nThe spicy aroma had mended me\nMatured for years and imported\nInto my glass you poured it\n\nAnd you're the only reason\nThat I remain unfrozen\nSuppose it stands to reason\nThat you would turn on me\n\nYou're so solid\nYou're so solid\nIt burns inside of me\n'Cause you're so solid\nIt burns inside of me\n\nWild Turkey's been chosen\nIts caramel nose can smell me\nArbourler, Jameson, I love you\nThe single malts come burning\n\nAnd you're the only reason\nThat I remain unfrozen\nSuppose it stands to reason\nThat you would turn on me\n\nYou're so solid\nYou're so solid\nIt burns inside of me\n'Cause you're so solid\nIt burns inside of me\n\nRoyal Canadian blended\nThe spicy aroma had mended me\n\nAnd you're the only reason\nThat I remain unfrozen\nSuppose it stands to reason\nThat you would turn on me\n\nYou're so solid\nYou're so solid\nIt burns inside of me\n'Cause you're so solid\nIt burns inside me"
    },
    {
        "name": "Escape",
        "album": "Showbiz",
        "lyrics": "You would say anything\nAnd you would try anything\nTo escape your meaningless\nAnd your insignificance\n\nYou're uncontrollable\nAnd we are unlovable\nAnd I don't want you to think that I care\nI never would, I never could again\n\nWhy can't you just love her?\nWhy be such a monster?\nYou bully from a distance\nYour brain needs some assistance\n\nBut I'll still take all the blame\n'Cause you and me are both one and the same\nAnd it's driving me mad\nAnd it's driving me mad\n\nI'll take back all the things that I said\nI didn't realize I was talking to the living dead\nBut I don't want you to think that I care\nI never would, I never could again\n\nYou would say anything\nAnd you would try anything\nTo escape your meaningless\nAnd your insignificance"
    },
    {
        "name": "Overdue",
        "album": "Showbiz",
        "lyrics": "You needed it when I was away\nAnd no matter what I say\nYou'll never forget when I wasn't there\nSo why should I care?\n\nI'm young but I know that I'm aroused\n\nYou know that I care\nYou should have been there\nYou know that I care\nYou should have been there\n\nIt doesn't matter where I have gone\nI just can't afford to\nPay for all the mistakes that you have made\nIt's about time I was paid\n\nI'm young but I know that I'm aroused\n\nYou know that I care\nYou should have been there\nYou know that I care\nYou should have been there\n\nYou know that I care\nYou should have been there\nYou know that I care\nYou should have been there\n\nYou know that I care\nYou should have been there\nYou know that I care\nYou should have been there"
    },
    {
        "name": "Hate This & I'll Love You",
        "album": "Showbiz",
        "lyrics": "Oh, I am growing tired\nOf allowing you to steal\nEverything I have\nYou're making me feel\n\nLike I was born to service you\nBut I am growing by the hour\n\nYou left us far behind\nSo we all discard our souls\nAnd blaze through your skies\nSo afraid to die\n\n'Cause I was born to destroy you\nAnd I am growing by the hour\nI'm getting strong in every way, yeah, yeah\nYeah, yeah\n\nYou led me on, you led me on\n\nAnd I'm getting strong in every way, yeah\nYeah, yeah"
    },
    {
        "name": "New Born",
        "album": "Origin of Symmetry",
        "lyrics": "Link it to the world\nLink it to yourself\nStretch it like a birth squeeze\n\nThe love for what you hide\nThe bitterness inside\nIs growing like the new born\n\nWhen you've seen, seen\nToo much\nToo young, young\nSoulless is everywhere\n\nHopeless time to roam\nThe distance to your home\nFades away to nowhere\n\nHow much are you worth?\nYou can't come down to earth\nYou're swelling up\nYou're unstoppable\n\n'Cause you've seen, seen\nToo much\nToo young, young\nSoulless is everywhere\n\nDestroy the spineless\nShow me it's real\nWasting our last chance, to come away\nJust break the silence\n'Cause I'm drifting away\nAway from you\n\nLink it to the world\nLink it to yourself\nStretch it like it's a birth squeeze\nAnd the love for what you hide\nAnd the bitterness inside\nIs growing like the new born\n\nWhen you've seen, seen\nToo much\nToo young, young\nSoulless is everywhere\n\nDestroy the spineless\nShow me it's real\nWasting our last chance, to come away\nJust break the silence\n'Cause I'm drifting away\nAway from you"
    },
    {
        "name": "Bliss",
        "album": "Origin of Symmetry",
        "lyrics": "Everything about you is how I'd wanna be\nYour freedom comes naturally\nEverything about you resonates happiness\nNow I won't settle for less\n\nGive me\nAll the peace and joy in your mind\n\nEverything about you pains my envying\nYour soul can't hate anything\nEverything about you is so easy to love\nThey're watching you from above\n\nGive me\nAll the peace and joy in your mind\nI want the peace and joy in your mind\nGive me the peace and joy in your mind\n\nEverything about you resonates happiness\nNow I won't settle for less\n\nGive me all the peace and joy in your mind\nI want the peace and joy in your mind\nGive me the peace and joy in your mind"
    },
    {
        "name": "Space Dementia",
        "album": "Origin of Symmetry",
        "lyrics": "H-8 is the one for me\nIt gives me all I need\nAnd helps me coexist\nWith the chill\n\nYou make me sick\nBecause I adore you so\nI love all the dirty tricks\nAnd twisted games you play\nOn me\n\nSpace dementia in your eyes and\nPeace will arise\nAnd tear us apart\nAnd make us meaningless\nAgain\n\nYou make us wanna die\nI'd cut your name in my heart\nWe'll destroy this world for you,\nI know you want me to\nFeel your pain\n\nSpace dementia in your eyes and\nPeace will arise\nAnd tear us apart\nAnd make us meaningless\nAgain\n\nOoh"
    },
    {
        "name": "Hyper Music",
        "album": "Origin of Symmetry",
        "lyrics": "Yeah your golden lies feed my role\nIn this forgotten space race under my control\nWho's returned from the dead?\nWho remains? \n(Just to spit it in your face)\n\nYou know that I don't want you and I never did\nI don't want you and I never will\n\nYou wanted more than I was worth\nAnd you think I was scared yeah\nAnd you needed proof\nWho really cares anymore?\nWho restrains \n(Just to spit it in your face)\n\nYou know that I don't love you and I never did\nI don't want you and I never will"
    },
    {
        "name": "Plug In Baby",
        "album": "Origin of Symmetry",
        "lyrics": "I've exposed your lies, baby\nThe underneath's no big surprise\nAnd now it's time for changing\nAnd cleansing everything\nTo forget your love\n\nMy plug-in baby\nCrucifies my enemies\nWhen I'm tired of giving, wohoh\nMy plug-in baby\nIn unbroken virgin realities\nIs tired of living, oooh\n\nDon't confuse\nBaby you're gonna lose your own game\nChange me, replace the envying\nTo forget your love\n\nMy plug-in baby\nCrucifies my enemies\nWhen I'm tired of giving, wohoh\nMy plug-in baby\nIn unbroken virgin realities\nIs tired of living, oooh\n\nAnd I've seen your loving\nMine is gone\nAnd I've been in trouble\nWhoa"
    },
    {
        "name": "Citizen Erased",
        "album": "Origin of Symmetry",
        "lyrics": "Break me in, teach us to cheat\nAnd to lie and cover up\nWhat shouldn't be shared\nAnd the truth unwinding\nScraping away at my mind\nPlease stop asking me to describe\n\nFor one moment\nI wish you'd hold your stage\nWith no feelings at all\nOpen minded\nI'm sure I used to be so free\n\nSelf expressed, exhausting for all to see\nAnd to be what you want\nAnd what you need\nAnd the truth's unwinding\nScraping away at my mind\nPlease stop asking me to describe\n\nFor one moment\nI wish you'd hold your stage\nWith no feelings at all\nOpen minded,\nI'm sure I used to be so free\n\nFor one moment\nI wish you'd hold your stage\nWith no feelings at all\nOpen minded\nI'm sure I used to be so free\n\nWash me away\nClean your body of me\nErase all the memories\nThey'll only bring us pain\nAnd I've seen all I'll ever need"
    },
    {
        "name": "Micro Cuts",
        "album": "Origin of Symmetry",
        "lyrics": "Hands are red with your blame\nMegaphone screaming my name\nWhimpers someone I should've loved\nSouls weeping above\n\nI've seen what you're doing to me\nDestroying puppet strings\nTo our souls\n\nMicro waves me insane\nA blade cuts in your brain\nSounds like forks on a plate\nBlackboard scratched with hate\n\nI've seen what you're doing to me\nDestroying puppet strings\nTo our souls"
    },
    {
        "name": "Screenager",
        "album": "Origin of Symmetry",
        "lyrics": "Who's so phony and always surrounded?\nStop your screaming - no one can hear\nAll the scars on your skin: 'post no bills'\n\nWho you were\nWas so beautiful\nRemember who\nWho you were\n\nHide from the mirror - the cracks and the memories\nHide from your family - they won't know you now\nFor all the holes in our souls host no thrills\n\nWho you were\nWas so beautiful\nMemories who\nWho you were"
    },
    {
        "name": "Darkshines",
        "album": "Origin of Symmetry",
        "lyrics": "Passing by, you light up my darkest skies\nYou'll take only seconds to draw me in\nSo be mine\nAnd your innocence, I will consume\n\nDark shines\nBringing me down\nMaking my heart feel sore\n'Cause it's good\n\nHold your hands up to your eyes again\nHide from the scary scenes, suppress your fears\nSo be mine\nAnd your innocence, I will consume\n\nDark shines\nBringing me down\nMaking my heart feel sore\n'Cause it's good\n\nYour dark shines\nBringing me down\nMaking my heart feel sore\n'Cause it's good\n\nDarkshines\nBringing me down\nMaking my heart feel sore\n'Cause it's good"
    },
    {
        "name": "Feeling Good",
        "album": "Origin of Symmetry",
        "lyrics": "Birds flying high, you know how I feel\nSun in the sky, you know how I feel\nReeds drifting on by, you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nFish in the sea, you know how I feel\nRiver running free, you know how I feel\nBlossom in the trees, you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nDragonflies all out in the sun\nYou know what I mean, don't you know\nButterflies are all having fun, you know what I mean\nSleep in peace, when the day is done\nAnd this old world is a new world and a bold world, for me\n\nStars when you shine, you know how I feel\nScent of the pine, you know how I feel\nYeah freedom is my life, and you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nOoh\n\n(Feeling good)"
    },
    {
        "name": "Megalomania",
        "album": "Origin of Symmetry",
        "lyrics": "Paradise comes at a price\nThat I am not prepared to pay\nWhat were we built for?\nCould someone tell me please\n\nThe good news is she can't have babies\nAnd won't accept gifts from me\nWhat are they for?\nThey'll just grow up and break the laws you've loved\n\nTake off your disguise\nI know that underneath it's me\nWho are you ooh\n\nUseless device it won't suffice\nI want a new game to play\nWhen I am gone - it won't be long\nBefore I disturb you in the dark\n\nAnd paradise comes at a price\nThat I am not prepared to pay\nWhat were we built for?\nWill someone tell me please\n\nTake off your disguise\nI know that underneath it's me"
    },
    {
        "name": "Dead Inside",
        "album": "Drones",
        "lyrics": "Dead inside\nDead inside\n\nRevere a million prayers\nAnd draw me into your holiness\nBut there's nothing there\nLight only shines from those who share\nUnleash a million drones\nAnd confine me then erase me, babe\nDo you have no soul?\nIt's like it died long ago\n\nYour lips feel warm to the touch\nYou can bring me back to life\nOn the outside you're ablaze and alive\nBut you're dead inside\n\nYou're free to touch the sky\nWhilst I am crushed and pulverised\nBecause you need control\nNow I'm the one who's letting go\nYou like to give an inch\nWhilst I am giving infinity\nBut now I've nothing left\nYou have no cares and I'm bereft\n\nYour skin feels warm to caress\nI see magic in your eyes\nOn the outside you're ablaze and alive\nBut you're dead inside\n\nDead inside\n\nFeel me now\nHold me please\nI need you to see who I am\nOpen up to me\nStop hiding from me\nIt's hurting, babe\nOnly you can stop the pain\nDon't leave me out in the cold\nDon't leave me out to die\nI gave you everything\nI can't give you anymore\nNow I've become just like you\n\nMy lips feel warm to the touch\nMy words seem so alive\nMy skin is warm to caress\nI'll control and hypnotise\nYou've taught me to lie without a trace\nAnd to kill with no remorse\nOn the outside I'm the greatest guy\nBut now I'm dead inside\n\nDead inside"
    },
    {
        "name": "Psycho",
        "album": "Drones",
        "lyrics": "Love, it will get you nowhere\nYou are on your own, lost in the wild\nSo come to me now, I could use someone like you\nSomeone who'll kill on my command\nAnd asks no questions\n\nI'm gonna make you\nI'm gonna break you\nI'm gonna make you\nA fucking psycho\nA fucking psycho\nA fucking psycho\n\nYour ass belongs to me now\n\nAre you a human drone?\n(Aye, sir!)\nAre you a killing machine?\n(Aye, sir!)\nI'm in control, mother fucker, do you understand?\n(Aye, sir!)\n\nYour mind is just a program\nAnd I'm the virus\nI'm changing the station\nI'll improve your thresholds\nI'll turn you into a super drone (a super drone)\nAnd you will kill on my command\nAnd I won't be responsible\n\nI'm gonna make you\nI'm gonna break you\nI'm gonna make you\nA fucking psycho\nA fucking psycho\nA fucking psycho\n\nYour ass belongs to me now\n\nAre you a psycho killer? Say \"I'm a psycho killer!\"\n(I am a psycho killer!)\nScream it!\n(I am a psycho killer!)\nShow me your war face!\n(Aaaaaahhhh!)\nYou are a pussy, I said show me your war face!\n(Aaaaaahhhh!)\n\nI'm gonna make you\nI'm gonna break you\nI'm gonna make you\nA fucking psycho\nA fucking psycho\nA fucking psycho\n\nYour ass belongs to me now\n\nI will break you, do you understand?\nI will break you, do you understand?\nI will break you, do you understand?\nI will break you, do you understand?\n(Aye, sir!)\n\nYou fucking psycho\nYour ass belongs to me now\nYour ass belongs to me now"
    },
    {
        "name": "Mercy",
        "album": "Drones",
        "lyrics": "Help me, I've fallen on the inside\nI tried to change the game\nI tried to infiltrate\nBut now I'm losing men in cloaks\nWho always seem to run the show\nSave me from the ghosts and shadows\nBefore they eat my soul\n\nMercy, mercy\nShow me mercy\nFrom the powers that be\nShow me mercy\nCan someone rescue me?\n\nAbsent gods and silent tyranny\nWe're going under hypnotised\nBy another puppeteer\nAnd tell me why the men in cloaks\nAlways have had to bring me down\nRunning from the ghosts and shadows\nThe world just disavows, yeah\n\nMercy, mercy\nShow me mercy\nFrom the powers that be\nShow me mercy\nCan someone rescue me?\n\nShow me mercy\nShow me mercy please\n\nHelp me\nI've fallen on the inside\nAnd all the men in cloaks\nTrying to devour my soul\n\nShow me mercy\nFrom the powers that be\nShow me mercy\nFrom the gutless and mean\nShow me mercy\nFrom the killing machines\nShow me mercy\nCan someone rescue me?"
    },
    {
        "name": "Reapers",
        "album": "Drones",
        "lyrics": "Home, it's becoming a killing field\nThere's a cross-hair locked on my heart\nWith no recourse\nAnd there's no one behind the wheel\nHellfire, you are wiping me out\nKilled by\n\nDrones!\nKilled by\nDrones!\nKilled by\n\nYou rule with lies and deceit\nAnd the world is on your side\nYou've got the CIA, babe\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\nAnd all you've done is brutalise\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna\nDrones!)\n\nWar, war just moved up a gear\nI don't think I can handle the truth\nI'm just a pawn\nAnd we're all expendable\nIncidentally, electronically erased\nBy your\n\nDrones!\nKilled by\nDrones!\nKilled by\n\nYou kill by remote control\nAnd the world is on your side\nYou've got Reapers and Hawks, babe\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\nNow I am radicalised\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna\nDrones!)\n\nKilled by\n\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\n\nYou rule with lies and deceit\nAnd the world is on your side\nYou've got the CIA, babe\nAll you've done is brutalise\nYou kill by remote control\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\nAnd the world is on your side\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\nYou've got Reapers and Hawks babe\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\nNow I am radicalised\n(You can run but you're never gonna hide, you can run but you're never gonna gonna gonna)\n\nHere come the drones!\nHere come the drones!\nHere come the drones!"
    },
    {
        "name": "The Handler",
        "album": "Drones",
        "lyrics": "You were my oppressor\nAnd I, I have been programmed to obey\nNow, you are my handler\nAnd I, I will execute your demands\n\nLeave me alone\nI must disassociate from you\n\nBehold my trance formation\nAnd you are empowered to do as you please\nMy mind was lost in translation\nAnd my heart has become a cold and impassive machine\n\nLeave me alone\nI must disassociate from you\n\nI won't let you control my feelings any more\nI will no longer do as I am told\nI am no longer afraid to walk alone\nLet me go, let me be\nI'm escaping from your grip\nYou will never own me again"
    },
    {
        "name": "Defector",
        "album": "Drones",
        "lyrics": "Free, yeah I am free from your inciting\nYou can't brainwash me, you've got a problem\nFree, yeah I'm free from society\nYou can't control me, I'm a defector\n\nYou think you're strong and you can't be broken\nBut your empire is dissolving\nYou thought, you thought I was weak\nBut you got it wrong\nLook into my eyes I'm a defector\n\nFree, yeah I am free from your inciting\nYou can't brainwash me, you've got a problem\nFree, yeah I'm free from society\nYou can't control me, I'm a defector\n\nYour blood is blue and your mind's turned green\nAnd your belly is all yellow\nYou believe, your throne is too high to be overthrown\nWe'll watch it get razed by a defector\n\nFree, yeah I am free from your inciting\nYou can't brainwash me, you've got a problem\nFree, yeah I'm free from society\nYou can't control me, I'm a defector\n\nI'm a defector\nFree, yeah I am free from your inciting\nYou can't brainwash me, you've got a problem\nFree, yeah I'm free from society\nYou can't control me, I'm a defector\n\nJFK continued:\nWe look for strength and assistance, confident that with your help\nMan will be what he was born to be: free and independent"
    },
    {
        "name": "Revolt",
        "album": "Drones",
        "lyrics": "How did we get in so much trouble?\nGetting out just seems impossible\nOppression is persisting\nI can't fight this brain conditioning\nOur freedom's just a loan\nRun by machines and drones\nThey've got us locked into their sights\nSoon they'll control what's left inside\nDon't try to hide it\nDon't tell me it's not there\n\nYou've got strength\nYou've got soul\nYou've felt pain\nYou've felt love\nYou can grow (you can grow)\nYou can grow (you can grow)\nYou can make this world what you want\nYou can revolt\nYou can revolt\nYou can revolt\n\nCan you hear a distant thunder?\nTaste Earth's blood and hunger\nWe live in a toxic jungle\nTruth is suppressed to mumbles\nThey'll take away our home\nThey're just machines and drones\nDon't try to fight it\nDon't tell me that you can't see\n\nThat you've got strength\nYou've got soul\nYou've felt pain\nYou've felt love\nYou can grow (you can grow)\nYou can grow (you can grow)\nYou can make this world what you want\nYou can revolt\nYou can revolt\nYou can revolt\n\nI can feel your pain\nI can feel your confusion\nI can see you're trapped in a maze\nLet's find a way to escape\n\nYou've got strength\nYou've got soul\nYou're not afraid\nYou're not a drone\nYou can grow (you can grow)\nYou can grow (you can grow)\nYou can make this world what you want\nYou can revolt\nYou can revolt\nYou can revolt"
    },
    {
        "name": "Aftermath",
        "album": "Drones",
        "lyrics": "War is all around\nI'm growing tired of fighting\nI've been drained and I can't hide it\nBut I have strength for you\nYou're all that's real anymore\nI am coming home now\nI need your comfort\n\nFrom this moment\nFrom this moment\nYou'll never be alone\nWe're bound together\nNow and forever\nThe loneliness has gone\n\nStates are crumbling\nAnd walls are rising high again\nIt's no place for the faint hearted\nBut my heart is strong\nBecause now I know where I belong\nIt's you and I against the world\nWe are free\n\nFrom this moment\nFrom this moment\nYou'll never be alone\nWe're bound together\nNow and forever\nThe loneliness has gone\n\nWe've gone against the tide\nAll we have is each other now\nI am coming home now\nI need your comfort\n\nFrom this moment\nFrom this moment (From this moment)\nYou'll never be alone (Never be alone)\nWe're bound together (Bound together)\nNow and forever (Now and forever)\nThe loneliness has gone\n\nFrom this moment (From this moment)\nFrom this moment (From this moment)\nYou'll never be alone (Never be alone)\nWe're bound together\nNow and forever\nThe loneliness has gone\n\nFrom this moment\nFrom this moment (From this moment)\nYou'll never be alone\nWe're bound together\nNow and forever\nThe loneliness has gone\n\nBound together\nNow and forever\nLoneliness has gone"
    },
    {
        "name": "The Globalist",
        "album": "Drones",
        "lyrics": "You were never truly loved\nYou have only been betrayed\nYou were never truly nurtured\nBy churches or the state\nYou were left unprotected\nTo these wild and fragile lands\n\nBut you can rise up like a god\nArm yourself\nYou can be strong\nYou can build a nuclear power\nTransform the earth to your desire\n\nFree your mind from false beliefs\nYou can be the commander in chief\nYou can hide your true motives\nTo dismantle and destroy\n\nNow you have finally have the codes\nI have given you the code\n\n10, 9, 8, 7, 6, 5, 4, 3, 2, 1\nFire\n\nThere's no country left\nTo love and cherish\nIt's gone, it's gone for good\nIt's you and me babe\nSurvivors\nTo hunt and gather memories\nOf the great nation we were\n\nThere's no countries left\nTo fight and conquer\nI think I destroyed them all\nIt's human nature\nThe greatest hunter\nWill survive alone\nWith no one left to love\n\nThere's no culture left\nTo love and cherish\nIt's gone, you know it's gone for good\nA trillion memories\nLost in space and time for evermore\nI just wanted\nI just needed to be loved"
    },
    {
        "name": "Drones",
        "album": "Drones",
        "lyrics": "Killed by drones\nMy mother, my father\nMy sister and my brother\nMy son and my daughter\nKilled by drones\nOur lives between your finger and your thumb\nCan you feel anything?\nAre you dead inside?\nNow you can kill\nFrom the safety of your home\nWith drones\n\nAmen"
    },
    {
        "name": "Feeling Good",
        "album": "Other and Unreleased",
        "lyrics": "Birds flying high, you know how I feel\nSun in the sky, you know how I feel\nReeds drifting on by, you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nFish in the sea, you know how I feel\nRiver running free, you know how I feel\nBlossom in the trees, you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nDragonflies all out in the sun\nYou know what I mean, don't you know\nButterflies are all having fun, you know what I mean\nSleep in peace, when the day is done\nAnd this old world is a new world and a bold world, for me\n\nStars when you shine, you know how I feel\nScent of the pine, you know how I feel\nYeah freedom is my life, and you know how I feel\nIt's a new dawn, it's a new day, it's a new life, for me\nAnd I'm feeling good\n\nOoh\n\n(Feeling good)"
    },
    {
        "name": "House of the Rising Sun",
        "album": "Other and Unreleased",
        "lyrics": "There is a house in New Orleans\nThey call the Rising Sun\nWell it's been the ruin of many a poor boy\nAnd, God, I know I'm one\n\nOh mother, tell your children\nNot to do what I have done\nYou spend your lives in sin and misery\nIn the house of the Rising Sun\n\nWell there is a house in New Orleans\nThey call the Rising Sun\nAnd it's been the ruin of many a poor boy\nAnd God I know I'm one"
    },
    {
        "name": "Take a Bow",
        "album": "Black Holes and Revelations",
        "lyrics": "Corrupt\nYou corrupt\nBring corruption to all that you touch\nHold\nYou'll behold\nAnd beholden for all that you've done\nAnd spell\nCast a spell\nCast a spell on the country you run\nAnd risk\nYou will risk\nYou will risk all their lives and their souls\nAnd burn\nYou will burn\nYou will burn in Hell\nYeah, you'll burn in Hell\nYou'll burn in Hell\nYeah you'll burn in Hell for your sins\n\nAnd our freedom's consuming itself\nWhat we've become is contrary to what we want\nTake a bow\n\nDeath\nYou bring death\nAnd destruction to all that you touch\nPay\nYou must pay\nYou must pay for your crimes against the earth\nAnd hex\nFeed the hex\nFeed the hex on the country you love\nYeah and beg\nYou will beg\nYou will beg for their lives and their souls\nYeah and burn\nYou will burn\nYou will burn in Hell\nYeah, you'll burn in Hell\nYou'll burn in Hell\nYeah you'll burn in Hell\nFor your sins"
    },
    {
        "name": "Starlight",
        "album": "Black Holes and Revelations",
        "lyrics": "Far away\nThis ship has taken me far away\nFar away from the memories\nOf the people who care if I live or die\n\nStarlight\nI will be chasing a starlight\nUntil the end of my life\nI don't know if it's worth it anymore\n\nHold you in my arms\nI just wanted to hold\nYou in my arms\n\nMy life\nYou electrify my life\nLet's conspire to ignite\nAll the souls that would die just to feel alive\n\nI'll never let you go\nIf you promise not to fade away\nNever fade away\n\nOur hopes and expectations\nBlack holes and revelations\nOur hopes and expectations\nBlack holes and revelations\n\nHold you in my arms\nI just wanted to hold\nYou in my arms\n\nFar away\nThis ship has taken me far away\nFar away from the memories\nOf the people who care if I live or die\n\nI'll never let you go\nIf you promise not to fade away\nNever fade away\n\nOur hopes and expectations\nBlack holes and revelations, yeah\nOur hopes and expectations\nBlack holes and revelations\n\nHold you in my arms\nI just wanted to hold\nYou in my arms\nI just wanted to hold"
    },
    {
        "name": "Supermassive Black Hole",
        "album": "Black Holes and Revelations",
        "lyrics": "Oh baby, don't you know I suffer?\nOh baby, can you hear me moan?\nYou caught me under false pretenses\nHow long before you let me go?\n\nOo-ah, you set my soul alight\nOo-ah, you set my soul alight\nGlaciers melting in the dead of night\nAnd the superstars sucked into the supermassive\n(Oo-ah, you set my soul alight)\nGlaciers melting in the dead of night\nAnd the superstars sucked into the (into the supermassive)\n(Oo-ah, you set my soul)\n\nI thought I was a fool for no one\nBut oh baby, I'm a fool for you\nYou're the Queen of the superficial\nBut how long before you tell the truth?\n\nOo-ah, you set my soul alight\nOo-ah, you set my soul alight\n\nGlaciers melting in the dead of night\nAnd the superstars sucked into the supermassive\n(Oo-ah, you set my soul alight)\nGlaciers melting in the dead of night\nAnd the superstars sucked into the (into the supermassive)\n(Oo-ah, you set my soul)\n\n(Supermassive black hole)\n(Supermassive black hole)\n(Supermassive black hole)\n(Supermassive black hole)\n\nGlaciers melting in the dead of night\nAnd the superstars sucked into the supermassive\nGlaciers melting in the dead of night\nAnd the superstars sucked into the supermassive\nGlaciers melting in the dead of night\nAnd the superstars sucked into the supermassive\n(Oo-ah, you set my soul alight)\nGlaciers melting in the dead of night\nAnd the superstars sucked into the (into the supermassive)\n(Oo-ah, you set my soul)\n\n(Supermassive black hole)\n(Supermassive black hole)\n(Supermassive black hole)\n(Supermassive black hole)"
    },
    {
        "name": "Map of the Problematique",
        "album": "Black Holes and Revelations",
        "lyrics": "Fear and panic in the air\nI want to be free\nFrom desolation and despair\nAnd I feel like everything I sow\nIs being swept away\nWell I refuse to let you go\n\nI can't get it right\nGet it right\nSince I met you\n\nLoneliness be over\nWhen will this loneliness be over?\n\nLife will flash before my eyes\nSo scattered and lost\nI want to touch the other side\nAnd no one thinks they are to blame\nWhy can't we see\nThat when we bleed, we bleed the same\n\nI can't get it right\nGet it right\nSince I met you\n\nLoneliness be over\nWhen will this loneliness be over?\nLoneliness be over\nWhen will this loneliness be over?"
    },
    {
        "name": "Soldier's Poem",
        "album": "Black Holes and Revelations",
        "lyrics": "Throw it all away\nLet's lose ourselves\n'Cause there's no one left for us to blame\nIt's a shame we're all dying\nAnd do you think you deserve your freedom?\n\nHow could you send us so far away from home\nWhen you know damn well that this is wrong\nI would still lay down my life for you\nAnd do you think you deserve your freedom?\n\nNo, I don't think you do\nThere's no justice in the world\nThere's no justice in the world\nAnd there never was"
    },
    {
        "name": "Invincible",
        "album": "Black Holes and Revelations",
        "lyrics": "Follow through\nMake your dreams come true\nDon't give up the fight\nYou will be alright\n'Cause there's no one like you in the universe\n\nDon't be afraid\nWhat your mind conceives\nYou should make a stand\nStand up for what you believe\nAnd tonight\nWe can truly say\nTogether we're invincible\n\nDuring the struggle\nThey will pull us down\nBut please, please\nLet's use this chance\nTo turn things around\nAnd tonight\nWe can truly say\nTogether we're invincible\n\nDo it on your own\nIt makes no difference to me\nWhat you leave behind\nWhat you choose to be\nAnd whatever they say\nYour soul's unbreakable\n\nDuring the struggle\nThey will pull us down\nBut please, please\nLet's use this chance\nTo turn things around\nAnd tonight\nWe can truly say\nTogether we're invincible\n\nTogether we're invincible\n\nDuring the struggle\nThey will pull us down\nPlease, please\nLet's use this chance\nTo turn things around\nAnd tonight\nWe can truly say\nTogether we're invincible\n\nTogether we're invincible"
    },
    {
        "name": "Assassin",
        "album": "Black Holes and Revelations",
        "lyrics": "War is overdue\nThe time has come for you\nTo shoot your leaders down\nAnd join forces underground\n\nLose control\n(Losing control)\nIn increasing pace\n(Increasing pace)\nWarped and bewitched\n(Warped and bewitched)\nIn time to erase\n(Crime to erase)\n\nWhatever they say\n(Ever they say)\nThese people are torn\n(People are torn)\nWild and bereft\n(Wild and bereft)\nAssassin is born\n(Assassin is born)\n\nOppose and disagree\nDestroy demon-ocracy\n\nLose control\n(Losing control)\nIn increasing pace\n(Increasing pace)\nWarped and bewitched\n(Warped and bewitched)\nIn time to erase\n(Crime to erase)\n\nWhatever they say\n(Ever they say)\nThese people are torn\n(People are torn)\nWild and bereft\n(Wild and bereft)\nAssassin is born\n(Assassin is born)"
    },
    {
        "name": "Exo-Politics",
        "album": "Black Holes and Revelations",
        "lyrics": "Open the skies over me\nI am waiting patiently\nI'll wait for a sign\nAs conspiracies unwind\nWill you slam shut or free your mind\nOr stay hypnotised?\n\nWhen the Zetas fill the skies\nWill our leaders tell us why?\nFully loaded satellites\nWill conquer nothing but our minds\n\nI'm waiting patiently\nI'll wait for the sign\n\nCarried through the centuries\nSecrets locked up\nAnd loaded on my back\nWell it weighs me down...\n\nWhen the Zetas fill the skies\nIt's just our leaders in disguise\nFully loaded satellites\nWill conquer nothing but our minds\n\nI'm waiting patiently\nI'll wait for the sign\nI'm waiting patiently\nI'll wait for the sign"
    },
    {
        "name": "City of Delusion",
        "album": "Black Holes and Revelations",
        "lyrics": "Stay away from me\nBuild a fortress\nAnd shield your beliefs\nTouch the divine\nAs we fall in line\n\nCan I believe\nWhen I don't trust\nAll your theories\nTurn to dust\nI choose to hide\nFrom the all seeing eye\n\nDestroy this city of delusion\nAnd break these walls down\nAnd I will avenge\nAnd justify my reasons with your blood\n\nYou'll not rest\nSettle for less\nUntil you guzzle\nAnd squander what's left\nDo not deny\nYet you live and let die \n\nDestroy this city of delusion\nAnd break these walls down\nAnd I will avenge\nAnd justify my reasons with your blood\n\nDestroy this city of delusion\nAnd break these walls down\nAnd I will avenge\nAnd justify my reasons with your blood"
    },
    {
        "name": "Hoodoo",
        "album": "Black Holes and Revelations",
        "lyrics": "Come into my life\nRegress into a dream\nWe will hide\nAnd build a new reality\n\nDraw another picture\nOf the life you could have had\nFollow your instincts\nAnd choose the other path\n\nYou should never be afraid\nYou're protected from trouble and pain\nWhy, why is this a crisis\nIn your eyes again?\n\nCome to be\nHow did it come to be\nTied to a railroad\nNo love to set us free\nWatch our souls fade away\nAnd our bodies crumbling\nDon't be afraid\nI will take the blow for you\n\nAnd I've had recurring nightmares\nThat I was loved for who I am\nAnd missed the opportunity\nTo be a better man"
    },
    {
        "name": "Knights of Cydonia",
        "album": "Black Holes and Revelations",
        "lyrics": "Come ride with me\nThrough the veins of history\nI'll show you how God\nFalls asleep on the job\n\nAnd how can we win\nWhen fools can be kings?\nDon't waste your time\nOr time will waste you\n\nNo one's gonna take me alive\nThe time has come to make things right\nYou and I must fight for our rights\nYou and I must fight to survive\n\nNo one's gonna take me alive\nThe time has come to make things right\nYou and I must fight for our rights\nYou and I must fight to survive\n\nNo one's gonna take me alive\nThe time has come to make things right\nYou and I must fight for our rights\nYou and I must fight to survive"
    },
    {
        "name": "Apocalypse Please",
        "album": "Absolution",
        "lyrics": "Declare this an emergency\nCome on and spread a sense of urgency\nAnd pull us through\nAnd pull us through\nAnd this is the end\nThis is the end of the world\n\nIt's time we saw a miracle\nCome on it's time for something biblical\nTo pull us through\nAnd pull us through\nAnd this is the end\nThis is the end of the world\n\nProclaim eternal victory\nCome on and change the course of history\nAnd pull us through\nAnd pull us through\nAnd this is the end\nThis is the end of the world"
    },
    {
        "name": "Time Is Running Out",
        "album": "Absolution",
        "lyrics": "I think I'm drowning, asphyxiated\nI wanna break this spell that you've created\nYou're something beautiful, a contradiction\nI wanna play the game, I want the friction\n\nYou will be the death of me\nYeah, you will be the death of me\n\nBury it\nI won't let you bury it\nI won't let you smother it\nI won't let you murder it\n\nAnd our time is running out\nAnd our time is running out\nYou can't push it underground\nYou can't stop it screaming out\n\nI wanted freedom, bound and restricted\nI tried to give you up but I'm addicted\nNow that you know I'm trapped, sense of elation\nYou'd never dream of breaking this fixation\n\nYou will squeeze the life out of me\n\nBury it\nI won't let you bury it\nI won't let you smother it\nI won't let you murder it\n\nAnd our time is running out\nAnd our time is running out\nYou can't push it underground\nYou can't stop it screaming out\n\nHow did it come to this?\nOooooo yeah, yeah, yeah, yeah, yeah\nOooooo yeah, yeah, yeah, yeah, yeah\nOooooo yeah, yeah, yeah, yeah, yeah\n\nYeah, you will suck the life out of me\n\nBury it\nI won't let you bury it\nI won't let you smother it\nI won't let you murder it\n\nAnd our time is running out\nAnd our time is running out\nYou can't push it underground\nYou can't stop it screaming out\n\nHow did it come to this?\nOooooo yeah, yeah, yeah, yeah, yeah\nOooooo yeah, yeah, yeah, yeah, yeah\nOooooo yeah, yeah, yeah, yeah, yeah"
    },
    {
        "name": "Sing for Absolution",
        "album": "Absolution",
        "lyrics": "Lips are turning blue\nA kiss that can't renew\nI only dream of you\nMy beautiful\n\nTiptoe to your room\nA starlight in the gloom\nI only dream of you\nAnd you never knew\n\nSing for absolution\nI will be singing\nAnd falling from your grace\n\nThere's no where left to hide\nIn no one to confide\nThe truth burns deep inside\nAnd will never die\n\nLips are turning blue\nA kiss that can't renew\nI only dream of you\nMy beautiful\n\nSing for absolution\nI will be singing\nAnd falling from your grace\n\nSing for absolution\nI will be singing\nAnd falling from your grace\n\nOur wrongs remain unrectified\nAnd our souls\nWon't be exhumed"
    },
    {
        "name": "Stockholm Syndrome",
        "album": "Absolution",
        "lyrics": "I won't stand in your way\nLet your hatred grow\nAnd she'll scream and she'll shout and she'll pray\nAnd she had a name\nYeah, she had a name\n\nAnd I won't hold you back\nLet your anger rise\nAnd we'll fly and we'll fall and we'll burn\nAnd no one will recall\nNo one will recall\n\nThis is the last time I'll abandon you\nAnd this is\nThe last time I'll forget you\nI wish I could\n\nLook to the stars\nAnd let hope burn in your eyes\nAnd we'll love and we'll hate and we'll die\nAll to no avail\nAll to no avail\n\nThis is the last time I'll abandon you\nAnd this is\nThe last time I'll forget you\nI wish I could\n\nThis is the last time\nI'll abandon you\nAnd this is\nThe last time I'll forget you\nI wish I could\nI wish I could"
    },
    {
        "name": "Falling Away with You",
        "album": "Absolution",
        "lyrics": "I can't remember when it was good\nMoments of happiness elude\nMaybe I just misunderstood\n\nAll of the love we left behind\nWatching the flash backs intertwine\nMemories I will never find\n\nSo I'll love whatever you become\nAnd forget the reckless things we've done\nI think our lives have just begun \nI think our lives have just begun\n\nAnd I'll feel my world crumbling\nI'll feel my life crumbling\nI'll feel my soul crumbling away\nAnd falling away\nFalling away with you\n\nStaying awake to chase a dream\nTasting the air you're breathing in\nI hope I won't forget a thing\n\nPromise to hold you close and pray\nWatching the fantasies decay\nNothing will ever stay the same\n\nAnd all of the love we threw away\nAnd all of the hopes we've cherished fade\nMaking the same mistakes again \nMaking the same mistakes again\n\nAnd I'll feel my world crumbling\nI'll feel my life crumbling\nI'll feel my soul crumbling away\nAnd falling away\nFalling away with you\n\nAll of the love we left behind\nWatching the flash backs intertwine\nMemories I will never find\nMemories I will never find"
    },
    {
        "name": "Hysteria",
        "album": "Absolution",
        "lyrics": "It's bugging me\nGrating me\nAnd twisting me around\nYeah I'm endlessly\nCaving in\nAnd turning inside out\n\n'Cause I want it now\nI want it now\nGive me your heart and your soul\nAnd I'm breaking out\nI'm breaking out\nLast chance to lose control\n\nYeah, it's holding me\nMorphing me\nAnd forcing me to strive\nTo be endlessly\nCold within\nAnd dreaming I'm alive\n\n'Cause I want it now\nI want it now\nGive me your heart and your soul\nI'm not breaking down\nI'm breaking out\nLast chance to lose control\n\nAnd I want you now\nI want you now\nI'll feel my heart implode\nAnd I'm breaking out\nEscaping now\nFeeling my faith erode"
    },
    {
        "name": "Blackout",
        "album": "Absolution",
        "lyrics": "Don't kid yourself \nAnd don't fool yourself \nThis love's too good to last \nAnd I'm too old to dream \n\nDon't grow up too fast \nAnd don't embrace the past \nThis life's too good to last \nAnd I'm too young to care \n\nDon't kid yourself \nAnd don't fool yourself \nThis life could be the last \nAnd we're too young to see"
    },
    {
        "name": "Butterflies & Hurricanes",
        "album": "Absolution",
        "lyrics": "Change\nEverything you are\nAnd everything you were\nYour number has been called\n\nFights\nAnd battles have begun\nRevenge will surely come\nYour hard times are ahead\n\nBest\nYou've got to be the best\nYou've got to change the world\nAnd use this chance to be heard\n\nYour time is now\n(Your time is now)\n\nChange\nEverything you are\nAnd everything you were\nYour number has been called\n\nFights\nAnd battles have begun\nRevenge will surely come\nYour hard times are ahead\n\nBest\nYou've got to be the best\nYou've got to change the world\nAnd you use this chance to be heard\n\nYour time is now\n(Your time is now)\n\nDon't\nLet yourself down\nDon't let yourself go\nYour last chance has arrived\n\nBest\nYou've got to be the best\nYou've got to change the world\nAnd use this chance to be heard\n\nYour time is now\n(Your time is now)"
    },
    {
        "name": "The Small Print",
        "album": "Absolution",
        "lyrics": "Take, take all you need\nAnd I'll compensate your greed\nWith broken hearts\nSell, I'll sell your memories\nFor 15 pounds per year\nBut just the good days\n\nSay it'll make you insane\nAnd it's bending the truth\nYou're to blame\nFor all the life that you'll lose\nAnd you watch this space\nBut I'm going all the way\nAnd be my slave to the grave\nI'm a priest God never paid\n\nHope, I hope you've seen the light\nCause no one really cares\nThey're just pretending\n\nSell, and I'll sell your memories \nFor 15 pounds per year\nBut you can keep the bad days\n\nSay it'll make you insane\nAnd I'm bending the truth\nYou're to blame\nFor all the life that you'll lose\nAnd you watch this space\nAnd I'm going all the way\nAnd be my slave to the grave\nI'm a priest God never paid\n\nSay it'll make you insane\nAnd I'm bending the truth\nYou're to blame\nFor all the life that you'll lose\nAnd you watch this space\nAnd I'm going all the way\nAnd be my slave to the grave\nI'm a priest God never paid"
    },
    {
        "name": "Endlessly",
        "album": "Absolution",
        "lyrics": "There's a part of me you'll never know\nThe only thing I'll never show\n\nHopelessly, I'll love you endlessly\nHopelessly, I'll give you everything\nBut I won't give you up\nI won't let you down\nAnd I won't leave you falling\nIf the moment ever comes\n\nIt's plain to see, it's trying to speak\nCherished dreams forever asleep\n\nHopelessly, I'll love you endlessly\nHopelessly, I'll give you everything\nBut I won't give you up\nI won't let you down\nAnd I won't leave you falling\nIf the moment ever comes\n\nHopelessly, I'll love you endlessly\nHopelessly, I'll give you everything\nBut I won't give you up\nI won't let you down\nAnd I won't leave you falling\nBut the moment never comes"
    },
    {
        "name": "Thoughts of a Dying Atheist",
        "album": "Absolution",
        "lyrics": "Eerie whispers trapped beneath my pillow \nWon't let me sleep, your memories \nI know you're in this room, I'm sure I heard you sigh \nFloating in-between where our worlds collide \n\nIt scares the hell out of me\nAnd the end is all I can see\nAnd it scares the hell out of me\nAnd the end is all I can see\nYeah yeah yeah\nYeah yeah, yeah yeah\n\nI know the moment's near \nAnd there's nothing we can do \nLook through a faithless eye \nAre you afraid to die?\n\nIt scares the hell out of me\nAnd the end is all I can see\nAnd it scares the hell out of me\nAnd the end is all I can see\nYeah yeah yeah\nYeah yeah, yeah yeah\n\nIt scares the hell out of me\nAnd the end is all I can see\nAnd it scares the hell out of me\nAnd the end is all I can see\nYeah yeah yeah\nYeah yeah, yeah yeah"
    }
]

var songsInThisQuiz = [];

var app = new Vue({
    el: "#main-app",
    data: {
        quizStarted: false,
        endTime: 0,
        timeLeft: null,
        currentSong: null,
        correctGuesses: 0,
        completedGuesses: 0,
        currentSongCounter: 0,
        interval: null,
        difficulty: {
            regular: true,
            hard: false
        },
        albums:{
            "Showbiz": {
                on: true,
                name: "Showbiz"
            },
            "Origin of Symmetry": {
                on: true,
                name: "Origin of Symmetry"
            },
            "Absolution": {
                on: true,
                name: "Absolution"
            },
            "Black Holes and Revelations": {
                on: true,
                name: "Black Holes and Revelations"
            },
            "The Resistance": {
                on: true,
                name: "The Resistance"
            },
            "The 2nd Law": {
                on: true,
                name: "The 2nd Law"
            },
            "Drones": {
                on: true,
                name: "Drones"
            },
            "B-sides": {
                on: false,
                name: "B-sides"
            },
            "Other and Unreleased": {
                on: false,
                name: "Other and Unreleased"
            }
        }
    },
    mounted: function(){

        var self = this;

        setBackground();


        document.addEventListener("keydown", function(e){
            if(self.quizStarted && e.which >= 49 && e.which <=52){

                var thisChoice = document.getElementById("option-" + (e.which - 49 + 1)).innerText; 
                self.submitChoice(thisChoice);


            }
        });
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
        },
        formattedTime(){

            var time = this.timeLeft;

            if(typeof(time) == "number"){
                var mins = Math.floor(time/60);
                var seconds = (time - mins*60);

                if(seconds < 10){
                    seconds = "0" + seconds.toString();
                }

                return `${mins}:${seconds}`;

            } else {
                return time;
            }
        }
    },
    methods: {
        createNewQuestion(){


            var selectedSong = songsInThisQuiz[this.currentSongCounter];
            this.currentSongCounter++;


            if(this.currentSongCounter >= songsInThisQuiz.length){
                this.endGame();
            }

            var lyricsSnippet = getLyricsSnippet(selectedSong.lyrics);

            this.currentSong = {
                lyrics: lyricsSnippet,
                name: selectedSong.name,
                correct: false,
                incorrect: false,
                choices: []
            };

            tempChoices = [];
            tempChoices.push(selectedSong.name);


            var tryCount = 0;

            // get a 3 other random song names
            while(tempChoices.length < 4 && tryCount < 1000){
                var randomIndex = Math.floor(Math.random()*allSongs.length);
                var randomSong = allSongs[randomIndex].name;

                if(tempChoices.indexOf(randomSong) == -1){
                    tempChoices.push(randomSong);
                }

                if(tryCount >= 999){
                    this.endGame()
                }
            }

            this.currentSong.choices = shuffle(tempChoices);

        },

        submitChoice(choice){

            // if we've already submitted a song, no need to do anything else
            if(this.currentSong.correct || this.currentSong.incorrect){
                return;
            }

            this.completedGuesses++;
            var self = this;
            var thisSong = allSongs.filter(function(song){
                return song.name == choice;
            });

            thisSong = thisSong[0];

            if(this.currentSong.name == choice){
                thisSong.correct = true;
                this.correctGuesses++;
                this.currentSong.correct = true;
            } else {
                thisSong.incorrect = true;
                this.currentSong.incorrect = true;
            }

            setTimeout(function(){
                self.createNewQuestion();
            }, 1000)
            
        },

        songIsCorrect(choice){

            var thisSong = allSongs.filter(function(song){
                return song.name == choice;
            });

            thisSong = thisSong[0];

            return(thisSong.correct);
        },

        songIsIncorrect(choice){

            var thisSong = allSongs.filter(function(song){
                return song.name == choice;
            });
            thisSong = thisSong[0];

            return(thisSong.incorrect);
        },

        selectAlbum(album){
            this.albums[album].on = (this.albums[album].on) ? false : true;
        },

        selectRegularSongs(){

            this.difficulty.regular = true;
            this.difficulty.hard = false;

            for(var key in this.albums){
                var album = this.albums[key];
                if(album.name != "B-sides" && album.name != "Other and Unreleased"){
                    album.on = true;    
                } else {
                    album.on = false;
                }
            }
        },

        selectHardSongs(){

            this.difficulty.regular = false;
            this.difficulty.hard = true;

            for(var key in this.albums){
                var album = this.albums[key];
                album.on = true;
            }
        },

        startQuiz(){


            var self = this;

            // build a subset of songs in the selected albums;
            songsInThisQuiz = [];

            // doing this rather than filtering so I could make deep copies of the song objects, not shallow ones
            for(var i = 0; i < allSongs.length; i++){
                var song = allSongs[i];

                if(self.albums[song.album].on){
                    var newSongCopy = JSON.parse(JSON.stringify(song));
                    newSongCopy.correct = false;
                    newSongCopy.incorrect = false;
                    newSongCopy.done = false;

                    songsInThisQuiz.push(newSongCopy);
                }
            }
 
            songsInThisQuiz = shuffle(songsInThisQuiz);

            this.quizStarted = true;
            this.endTime = Date.now() + 1000 * QUIZ_TIME;
            this.createNewQuestion();

            this.interval = setInterval(function(){
                var timeNow = Date.now();
                var secondsLeft = Math.floor((self.endTime - timeNow)/1000);

                self.timeLeft = secondsLeft;

                if(self.timeLeft <= 0 ){
                    clearInterval(self.interval);
                    console.log("Time's up");

                    self.timeLeft = "YOUR TIME IS NOW"

                    document.getElementById("time-left").innerText = "YOUR TIME IS NOW";
                }
            }, 1000)
        },

        playAgain(){

            console.log("resetting");

            setBackground();
            songsInThisQuiz = [];

            this.inteval = null;
            this.quizStarted = false;
            this.endTime = 0;
            this.timeLeft = null;
            this.currentSong = null;
            this.currentSongCounter = 0;
            this.correctGuesses = 0;
            this.completedGuesses = 0;

        },

        optionId(id){
            return "option-" + id;
        },

        endGame(){
            console.log("Out of songs. ENDING GAME!");
            clearInterval(this.interval);
            console.log("Time's up");

            this.timeLeft = "OUT OF SONGS"

            document.getElementById("time-left").innerText = "OUT OF SONGS";
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


function setBackground(){
    var randomBackground = Math.floor(Math.random() * PHOTO_COUNT) + 1;
    document.getElementById("background-overlay").style = "background: url('assets/images/" + randomBackground + ".jpg') center center / cover no-repeat;";
}



function getLyricsSnippet(lyrics){
    var lyricsArray = lyrics.split("\n");

    var stanzaDeliniators = [0];
    var selectedStanza = [];

    var endOfFirstStanza = lyricsArray.indexOf("");

    for(var i = 0; i < lyricsArray.length; i++){
        if(lyricsArray[i] == ""){
            if(stanzaDeliniators.indexOf(i) == -1){
                stanzaDeliniators.push(i);
            }
        }
    }

    stanzaDeliniators.push(lyricsArray.length);         // push last stanza


    var randomIndex = Math.floor(Math.random() * (stanzaDeliniators.length - 1));
    var startIndex = stanzaDeliniators[randomIndex];
    var endIndex = stanzaDeliniators[randomIndex + 1]; 

    for(var j = startIndex; j < endIndex; j++){
        if(lyricsArray[j].length){
            selectedStanza.push(lyricsArray[j]);
        }
    }

    if(selectedStanza.length % 3 == 0) {
        selectedStanza = selectedStanza.slice(0,3);
    } else{
        selectedStanza = selectedStanza.slice(0,2);
    }

    var responseLyrics = selectedStanza.join("<br>");

    return responseLyrics;
}

/*
function fetchSongLyrircs(songName, callback){

    var url = "http://lyric-api.herokuapp.com/api/find/" +  BAND_NAME + "/" + songName;

    axios.get(url)
      .then(function(response) {
        console.log(response);
        if(response.data.err != "none"){
            console.log("ERROR: " + response.data.err);
        } else {

            console.log(`got lyrics for ${songName}`);
            var lyrics = response.data.lyric;
            //console.log(lyrics);
            var lyricsArray = lyrics.split("\n");

            console.log(lyricsArray);


            var stanzaDeliniators = [0];
            var selectedStanza = [];

            var endOfFirstStanza = lyricsArray.indexOf("");

            for(var i = 0; i < lyricsArray.length; i++){
                if(lyricsArray[i] == ""){
                    if(stanzaDeliniators.indexOf(i) == -1){
                        stanzaDeliniators.push(i);
                    }
                }
            }

            stanzaDeliniators.push(lyricsArray.length);         // push last stanza


            var randomIndex = Math.floor(Math.random() * (stanzaDeliniators.length - 1));
            var startIndex = stanzaDeliniators[randomIndex];
            var endIndex = stanzaDeliniators[randomIndex + 1]; 

            console.log(`${startIndex}, ${endIndex}`);

            for(var j = startIndex; j <= endIndex; j++){
                selectedStanza.push(lyricsArray[j]);
            }

            //console.log(selectedStanza.join("\n"));
            var responseLyrics = selectedStanza.join("\n");
            callback();

        }
      })
}*/