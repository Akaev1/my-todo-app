The task application
The main running exercise of this course is the classic "TODO" application. This is a very common example, and you can see lots of examples using this online. The application lets to users create tasks and mark them as complete. In addition, we will be adding details to the tasks and give access to tasks to other users.

Exercise 1: Create a React application where you can register and add to a list of tasks
The purpose of the first week exercise is to install and verify the tools used to develop and get help for the course

Your application should have the following:

A list of checkboxes for all created tasks
An input field with a submit button to add a new task
You can choose to ways to create the application:

Step 1: Install and sign up for necessary tools
Install NodeJS (if you don't already have it)
Sign up for GitHub student developer pack which gives you access to important resources like IntelliJ Ultimate and Heroku for free. Make sure to use your school email address for the registration.
Download IntelliJ IDEA Ultimate. You can use a Trial license until your GitHub student pack is registered. You can then use the IntelliJ student page to get a long term license
Sign in to https://mattermost.kristiania.no/ and find the PG6301 channel and send a message saying Hello
Step 2: Alternative 1: Use the Vite project wizard (quick start, but lots of confusing code)
Open a terminal Window, and cd to a directory for your course assignments. This directory should not contain spaces or special characters ([a-zA-Z0-9._-] are okay)

Run npm init vite - this will ask you what name you want for your project subdirectory, what framework to use (select React) and what variant to use (select JavaScript)
Follow the instructions from the Wizard to cd into the directory and run npm install and npm run dev
Go to http://localhost:5173/ to see your project running
Start IntelliJ
Open the project directory using File > Open
Navigate to src/App.jsx and update the code to create a TODO application
When you have completed your application, upload the code to GitHub
Step 2: Alternative 2: Build the project from scratch (more steps, but no files not created by you)
Open a terminal Window, and cd to a directory for your course assignments. This directory should not contain spaces or special characters ([a-zA-Z0-9._-] are okay)

mkdir <your project name>: create a new directory for your project
cd <your project name>: change directory to the project directory
npm init -y: creates package.json for your scripts and dependencies
npm install --save-dev vite: add Vite as a tool in your project
npm install react react-dom: add React as a library in your project
npm pkg set scripts.dev="vite" Add a script to run your project
npm run dev: starts up the project
Go to http://localhost:5173/ to see your (empty) project running
You can now open the project in IntelliJ and start development

Start IntelliJ
File > Open: Open the project directory
Create files named index.html and src/main.jsx. See the course material to see how these files should look
Add the code to create a <TodoApplication /> component with a <AddTaskForm /> component
When you have completed your application, upload the code to GitHub
Step 3: Feedback and continue
When you have managed to create your first React application, you should send a message saying simply "Exercise 1 complete! 🎉" at Mattermost! Feel free to include the link to your GitHub repository.

If you want to explore React a bit more right away, check out the official React tutorials.

Step 4: Competition
We need a logo for the course GitHub pages. Post your entry on Mattermost and vote with emojiis on other entries. Despite knowing better from experience, I will let the democratic process decide on the logo.

Exercise solution:
Check out the reference code from lecture 1
