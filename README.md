# Prerequisites

Before starting the project its necessary to have installed node.js and git.
If you haven't, install these two applications.
Go to https://nodejs.org/en/ and https://git-scm.com/downloads and install necessary programs.

# Installing

After the prerequisites are fulfilled follow the next steps.

0. Open terminal
```
Next commands execute in the terminal.
```
1. Clone this repository to your pc.
```
git clone https://github.com/loncaa/cialdnb.git
```
2. Change the current directory to 'cialdnb/cial_back'
```
cd cialdnb/cial_back
```
3. Execute the next commands:
```
npm install
node ./src/bin/www
```
4. Open your browser and in the URL field type: http://localhost:4001

## Technical Overview

It's monolith app created with React and Node.js.

Node.js serve web application as static content and exposes API endpoints.
Also, it is API Proxy for accessing DuckDuckGo search.

React is JavaScript library which helps us create one-page websites.
Big help to me was Ract-redux, it is basically a container for all web application states.
The user interface is created with Material-UI predefined components.

User search queries are preserved in a file called 'search_history'

## Frontend Changes

If you changed something on the frontend and wants to serve that as web application follow the next steps.

1. Build React app with npm script
```
cd cialdnb/cial_front
npm run-script build
```
2. Copy content of build folder into a public folder in cial_back
```
cialdnb/cial_front/build/* -> cialdnb/cial_back/public
```
3. Restart node server