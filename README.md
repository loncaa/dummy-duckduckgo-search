# Prerequisites

Before starting the project its necessary to have installed node.js and git.
If you haven't, install these two applications.
Go to https://nodejs.org/en/ and https://git-scm.com/downloads and install necessary programs.

# Installing

After the prerequisites are fulfilled follow the next steps.

1. Clone this repository to your pc.
```
git clone https://github.com/loncaa/cialdnb.git
```
2. Position yourself in the 'cialdnb/cial_back' folder
3. Execute the next commands:
```
npm install
node ./src/bin/www
```
4. Open your browser and in the URL field type: http://localhost:4001

## Technical Overview

It's monolith app created with React and Node.js.

Node.js serve web application as static content and exposes API endpoints.
Also, its is API Proxy for accessing DuckDuckGo search.

React is JavaScript library which helps us create one page websites.
Big help to me was Ract-redux, it is basically a container for all web application states.
The user interface is created with Material-UI predefined components.