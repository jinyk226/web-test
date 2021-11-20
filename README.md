# web-test
Alright what am I going to do. Build a website that uses a database? Works for me!

//'first commit' - I copy/pasted the github new repo instructions to link this project from my git repo to my github repo.

I want this website to have a floating header and a footer. I'll set it up so that it will run online first and then start working on the HTML a bit. Although the majority of html will be in javascript folders, I will create an html template so it's easier to work with.

////////////

15 seconds into working, I remembered my eslint does not know to read node and es6 syntax (at least that's how I understand it). My only fix I've been able to put together is to make a custom .eslintrc with es6 and node set as true.

My super simple .eslintrc now works, and I added an app.listen on port 3000. I ran 'npm init' and pressed 'enter' until the following menus stopped populating. I'm not certain what those do, and the code seems to work without adding any additional information.

Next is to install/require my basic functions/commands, including 'chalk' simply because I'd like to clearly be able to see my "LISTENING ON localhost:3000" in my console while I'm developing everything (I'm sure I will console.log plenty).

My code is now listening on localhost:3000, nice! Time to start making the HTML template to show on the homescreen.

////////////

I attempted to use a css framework, foundation, with my code. I could not figure out how to properly do so, so I will need to revert back to classic css for now.

////////////

It turns out the fullstack project wikistack uses bootstrap. I'd like to learn foundations, but bootstrap is definitely convenient as a "plug and go" program, whereas foundation seems to need a bit more preparation work. I copied the wikistack header as a base template for the header and footer.
