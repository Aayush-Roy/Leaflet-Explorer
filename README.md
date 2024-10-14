Tech Stack
Front-end:
HTML
CSS
JavaScript
Bootstrap
EJS (Embedded JavaScript templating)
Leaflet.js (for interactive maps)

Back-end:
Node.js
Express.js
Database:
MongoDB (with Mongoose ODM)

Authentication:
Passport.js (for user authentication)
Features
User authentication and authorization using Passport.js
Create, edit, and delete listings
Add and remove reviews on listings
Display user-generated listings on a map using Leaflet.js
Automatically generates maps based on location
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Install the dependencies:

bash
Copy code
npm install
Set up your environment variables (in a .env file):

bash
Copy code
PORT=3000
DATABASE_URL=your_mongo_db_url
SESSION_SECRET=your_secret
Start the server:

bash
Copy code
npm start
Usage
Visit http://localhost:3000 to access the application.
Sign up or log in to create and manage listings.
Dependencies
Here’s a list of the main dependencies used in the project:

Express.js: ^4.x.x - Fast, unopinionated, minimalist web framework for Node.js
Mongoose: ^8.x.x - MongoDB object modeling for Node.js
Passport.js: ^0.6.x - Authentication middleware for Node.js
EJS: ^3.x.x - Embedded JavaScript templating
Leaflet.js: ^1.9.x - JavaScript library for interactive maps
Connect-flash: ^0.x.x - Flash messages for Express
Express-session: ^1.x.x - Session middleware for Express
Make sure to run npm install to install all the required dependencies listed in package.json.

Contributing
Feel free to contribute by submitting pull requests, reporting issues, or suggesting improvements!

License
This project is licensed under the MIT License - see the LICENSE file for details.

