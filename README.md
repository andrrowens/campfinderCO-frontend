# Getting Started With CampFinderCO (Frontend)

CampFinderCO was created to allow campers from Colorado and around the country to discover, submit, and review dispersed or backcounty campsites. Feel free to check it out and let me know what you think!

The following steps are to set up and get started with the frontend of the project.

## Git Clone:

To start you'll need to have Mac vers or WSL2 set up.

Go to the following URL: https://github.com/andrrowens/phase-4-project-frontend

Next, click on Fork button at the top right of your screen.

![ForkBtn](https://www.earthdatascience.org/images/earth-analytics/git-version-control/githubguides-bootcamp-fork.png)

Next, click on Create Fork

![](https://github.com/jccaropino7786/legendary-phase1-project/blob/main/images%20and%20gifs/create%20fork.PNG?raw=true)

Next, click on the green <>Code button. A dropdown should appear. 

Make sure to select Local and SSH as shown in the image below and then click the button with two overlapping boxes located in the center-right of the screen. This will copy the SSH key for you.

![](https://i.imgur.com/EH3a3m8.png)

Next, open up your terminal and navigate to the directory where you would like to clone CampFinderCO.

Then type: 

> git clone

Then paste the copied SSH key from GitHub by right clicking or pressing command + v (Mac users) or ctrl + v (Windows users).

Once the SSH key is pasted press enter.

Then type:

> ls

Find the file "phase-4-project-frontend"

Then navigate into the project directory typing:

> cd phase-4-project-frontend


Then type:

> code .

This will open up the project repository in VSCode.


You'll need to install the dependency (library) for our front-end React application inside of a terminal that's opened within VSCode.

To do this type:

 > npm install

 This step may take up to a few minutes.

 Once that's complete, type:

 > npm start

After running npm start the homepage should open up in your browser!

From the homepage, you will need to sign up in order to fully access CampFinderCO:

![](https://i.imgur.com/f8hemUO.png)

When you need to log out, simply click the Logout button at the top right of the browser:

![](https://i.imgur.com/avkIhvx.png)

Once logged out, you can always log back in to fully access CampFinderCO:

![](https://i.imgur.com/eOFRln9.png)

Logged in users can view and add campsites:

![](https://i.imgur.com/wQszowV.png)

![](https://i.imgur.com/wp5Gc4E.png)

Logged in users can also view existing reviews as well as add and modify their own:

![](https://i.imgur.com/KUdFXBV.png)

![](https://i.imgur.com/YAEM5JT.png)

I hope you enjoy exploring CampFinder and look forward to any feedback you may have to share.

Cheers!

License: This project is licensed under the MIT license