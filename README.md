<img src="gif/credits.gif" width="100%">

# After credits

https://after-credits.netlify.app/

this is a simple project to show the credits of a movie from the movie database api.

# Installation

1. Clone the repo
2. open index.html

# Code Review

1. `js` - Jättebra med tydliga kommentarer som beskriver vad koden gör men fundera på att placera kod i funktioner för ännu bättre läsbarhet.
2. `js:74, 80, 81, 88` - Finns kvar onödiga console.log kommentarer
3. `js:122` - I funktionen som körs efter eventlistener "wheel" finns en parameter som aldrig används.
4. `style.css:7 ` - Fundera på att istället använda \* {box-sizing: border-box; margin:0; padding:0} för att bli av med färdiginställd margin och padding.
5. `style.css:49` - Då det är väldigt lite css som ändras av media query är det helt rimligt att detta ligger i styles.css men fundera på att även lägga detta i separat fil.

# Testers

Tested by the following people:

1. Axel
2. Douglas
