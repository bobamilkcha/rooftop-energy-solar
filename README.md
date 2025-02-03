# rooftop-energy-solar

###OVERVIEW

A responsive web application designed to help users estimate savings from solar energy installations. It includes a callback request form for further consultation and integrates with a backend database for storing user inquiries.

###Tech Stack

Frontend:
HTML
Tailwind CSS (via CDN)
JavaScript

Backend:
Node.js
Express.js
MongoDB Atlas

Testing:
Postman (API routes testing)

Hosting:
Frontend: Netlify
Backend: Render

CI/CD:
GitHub integration for continuous deployment on both Netlify and Render

###FEATURES

Solar Savings Calculator: Provides users with an interactive tool to estimate their potential savings.
Callback Request Form: Captures customer inquiries and stores them in the database.
Print Functionality: Allows users to print calculation results and form submissions.
Responsive Design: Ensures a seamless experience across different devices.

###TECHNICAL ARCHITECTURE

Frontend:
HTML for structure and layout.
Tailwind CSS for stylization and improved UI/UX.
JavaScript for functionalities such as:
Back-to-top button.
Navigation bar toggle.
Calculator logic and request form submission.

Backend:
Node.js as the JavaScript runtime environment.
Express.js as the backend framework.
MongoDB Atlas as the cloud database for storing customer information.

Deployment:
Frontend: Deployed on Netlify with automatic updates via GitHub.
Backend: Deployed on Render with automated deployment via GitHub.

###FUTURE IMPROVEMENTS
User Authentication: Implement login and sign-up features for personalized experiences.
Additional Calculator Features: Compare different solar panel models or payment plans.
Enhanced Error Handling: Improve feedback to users in case of errors.
UI/UX Enhancements: Introduce animations and reusable components, possibly using React.

###How to Run Locally

###Prerequisites:
Node.js
Express.js
MongoDB Atlas(Mongoose in VS code)
Cors
Dotenv

Clone the repository:
git clone https://github.com/your-username/solar-savings-calculator.git
cd solar-savings-calculator

Install dependencies:
npm install OR yarn install

Set up environment variables:
Create a .env file in the root directory.
Add your MongoDB Atlas connection string and other necessary configurations.
POST API endpoint : <host>/api/users

Start the backend server:
if server.js in backend folder :
node backend/server.js
if server.js in root folder :
node server.js

Open the frontend:
Open index.html in a browser or use a local server.

Live Demo
https://rooftop-energy-solar-savings-calc.netlify.app/#calculator

Deployment :
Instructions for deploying the backend to Render and frontend to Netlify can be found in the Render documentation and Netlify documentation.

Contributors
Nursyasya Batrisyia Binti Zulkiflee - Developer

License
This project is licensed under the MIT License.

