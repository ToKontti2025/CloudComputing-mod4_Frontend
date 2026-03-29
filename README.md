# Task 02 - Sentiment Analysis Frontend with Render

## Project overview

This project is a mobile-friendly sentiment analysis frontend built with React and Vite.

The frontend was first created as preparatory work for later backend integration. In the earlier stage, the application used a simulated sentiment result in the frontend. Later, the project was updated to use the real sentiment analysis backend deployed in CSC Rahti over HTTPS.

The purpose of this task is to create a responsive user interface, use a frontend framework with a build process, and deploy the application using Render.

## Objective
# Task 02 - Sentiment Analysis Frontend

## Project overview

This project is a mobile-friendly sentiment analysis frontend built with React and Vite.

The frontend was first created as preparatory work for later backend integration. In the earlier stage, the application used a simulated sentiment result in the frontend. Later, the project was updated to use the real sentiment analysis backend deployed in CSC Rahti over HTTPS.

The purpose of this task is to create a responsive user interface, use a frontend framework with a build process, and deploy the application as a hosted web application.

## Objective

The objective of this task is to:

* build a responsive web application
* display sentiment analysis results clearly
* use a framework with a build process
* integrate the frontend with the deployed backend
* use HTTPS for backend connections
* deploy the application as a public hosted frontend

## Technologies used

* React
* Vite
* JavaScript
* CSS
* GitHub Pages
* CSC Rahti backend API over HTTPS

## Features

The application includes:

* a responsive frontend layout
* a text input area for user input
* a button to send text to the backend for analysis
* sentiment result display
* positive score display
* negative score display
* backend integration over HTTPS
* build-ready structure created with React and Vite

The frontend sends the user input to the deployed backend API and shows the returned sentiment analysis result in the browser.

## Backend integration

The frontend is connected to the backend deployed in CSC Rahti.

Backend API endpoint:

* https://mod4-backend-cloud-computing-tk-2026.2.rahtiapp.fi/api

The frontend sends a POST request in JSON format and receives the sentiment result from the backend. The returned response includes:

* the original text
* detected sentiment
* positive score
* negative score

Because the frontend and backend are hosted on different domains, CORS support had to be enabled in the backend so that browser requests would be allowed.

## Deployment

The frontend was published through GitHub Pages.

A separate public repository was created for the frontend because with the free GitHub Pages setup the project needs to be in the repository root and public.

To support GitHub Pages deployment, the project was updated with:

* a correct `base` setting in `vite.config.js`
* `gh-pages` as a development dependency
* deploy scripts in `package.json`

Deployment was done with:

* `npm run deploy`

This created a production build into the `dist` folder and published it to the `gh-pages` branch.

Published frontend URL:

* https://tokontti2025.github.io/CloudComputing-mod4_Frontend/

## Project structure

mod4_frontend/
├── src/
├── public/
├── package.json
├── vite.config.js
├── README.md
└── learning_diary.md

## Result

The result of this task is a working React- and Vite-based frontend that runs locally, passes the build step, and communicates with the deployed backend over HTTPS.

This task also helped connect the earlier frontend work with the backend deployment task, turning the frontend from a static demo into a working client application.

In the final version, the frontend is also publicly available through GitHub Pages, so the application can be tested directly in a browser without a local environment.

## Use of AI

Artificial intelligence (OpenAI ChatGPT, GPT-5.4 model) was used in this project to support learning and debugging. In addition, AI was used to improve the clarity of the text and documentation so that the project structure and explanations would be as understandable as possible. The use of AI was limited to supporting learning and the author’s own work, not to automatically completing the assignment.
The objective of this task is to:

* build a responsive web application
* display sentiment analysis results clearly
* use a framework with a build process
* integrate the frontend with the deployed backend
* use HTTPS for backend connections
* deploy the application using Render.com

## Technologies used

* React
* Vite
* JavaScript
* CSS
* Render.com
* CSC Rahti backend API over HTTPS

## Features

The application includes:

* a responsive frontend layout
* a text input area for user input
* a button to send text to the backend for analysis
* sentiment result display
* positive score display
* negative score display
* backend integration over HTTPS
* build-ready structure created with React and Vite

The frontend sends the user input to the deployed backend API and shows the returned sentiment analysis result in the browser.

## Backend integration

The frontend is connected to the backend deployed in CSC Rahti.

Backend API endpoint:

* https://mod4-backend-cloud-computing-tk-2026.2.rahtiapp.fi/api

The frontend sends a POST request in JSON format and receives the sentiment result from the backend. The returned response includes:

* the original text
* detected sentiment
* positive score
* negative score

## Project structure

task02_render_frontend/
├── src/
├── public/
├── package.json
├── vite.config.js
├── README.md
└── learning_diary.md

## Result

The result of this task is a working React- and Vite-based frontend that runs locally, passes the build step, and communicates with the deployed backend over HTTPS.

This task also helped connect the earlier frontend work with the backend deployment task, turning the frontend from a static demo into a working client application.

## Use of AI

Artificial intelligence (OpenAI ChatGPT, GPT-5.4 model) was used in this project to support learning and debugging. In addition, AI was used to improve the clarity of the text and documentation so that the project structure and explanations would be as understandable as possible. The use of AI was limited to supporting learning and the author’s own work, not to automatically completing the assignment.