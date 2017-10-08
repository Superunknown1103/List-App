
# List-App

1. First I initiated a git repository, although I did run into a mistake here and originally cloned the repository into the wrong directory, that is why I ask you please ignore the first 6 or 7 commits with names like blablabla. Sorry about that, those are commits from another test repository that got merged into the same git history file.

2. Then I created the file structure layout. I got the layout from a similar MVC project I did earlier this year with SQL.

3. Now I added HTML with Bootstrap to get me up and running, I like to do a little bit of styling in the beggining, but go back and add colors and glitter and later. I have made a few basic similar sites so it was pretty simple to paste in most of the code, and change the names to fit the requirements. 

4. I went into connection.js and set up a sql connection to localhost using a database called posts, this is available via sql documentation online.

4. Then I went into schema.sql and created a basic schema for this post object.

5. Then I went into server.js and pasted in the code for my node server setup.

6. Now I am getting to the point where I would like to test this code, and my node server, so I run npm init as well as npm i and then go and add my required node packages into my dependencies, these would be express, body-parser, and mysql for the database.

7. Once my dependencies are added, I try to test my code but I realize that I am requring in routes that I have not yet established. So I go and put in a /GET route. Still I am a little confused, since I don't think I need to have a route setup for the app just to show up (the UI at least) on my localhost. After I adding my get route, I was correct, I still have an error and adding the /GET route did not solve my problem. I realize that while copying my folder structure from another project I put everything into the /app folder when in fact I forgot that the schema, package.json, node_modules, and server should be outside (in the main repository), this of course is not necessary and I could re-work it to work with the files being on the inside of the app folder but to follow MVC guidelines it is important to have the files organized in this way.

8. Great, my code is up and running, and I notice I have a nice bootstrap layout, as well as even my first route (/GET) is done. 

9. Welp, now it looks like I need to make a /POST route to add data into my sql database. As with my /GET route, I add in lots of console.log's to avoid code breakage. Ok, now this isn't going to work because the buttons on the front-end don't do anything yet. At least the code doesn't break.

10. Enter post.js, this is where i will define posts. I have created a newPost object taking in a few parameters. This is where I got creative and decided to add a few more features I thought would be useful besides just getting data. I want to know who authored the data, and I want to use moment.js to find out the time it was written.

11. Then I am using jQuery to make an ajax request, which on success, will append our data into the console, and onto the page in my post-box.

12. Now my problem is that on refresh, my data which is appending to the page and the console, disappears. I will need to figure out how the session storage works in this application. Since i don't fully understand the requirements for storage (how the code in the url works), I email Josh to get an answer, and in the meantime work on the CSS.

13. Added a nice wine red and pretty font for the app. (CSS + Google Fonts)

14. Ran into a problem with mysql persisting data on refresh, which is an essential part of this app, so switched to using sequelize.

15. I decided to write some JavaScript for the code, allowing the user to enter a previous code or have a 32 digit hex code generated for them.

16. The hexcode is sucessfully working.




