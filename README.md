<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project README</title>
</head>
<body>
    <h1>Tech Stack</h1>
    <h2>Front-end:</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>EJS (Embedded JavaScript templating)</li>
        <li>Leaflet.js (for interactive maps)</li>
    </ul>
    <h2>Back-end:</h2>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
    </ul>
    <h2>Database:</h2>
    <ul>
        <li>MongoDB (with Mongoose ODM)</li>
    </ul>
    <h2>Authentication:</h2>
    <ul>
        <li>Passport.js (for user authentication)</li>
    </ul>
    <h1>Features</h1>
    <ul>
        <li>User authentication and authorization using Passport.js</li>
        <li>Create, edit, and delete listings</li>
        <li>Add and remove reviews on listings</li>
        <li>Display user-generated listings on a map using Leaflet.js</li>
        <li>Automatically generates maps based on location</li>
    </ul>
    <h1>Installation</h1>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/your-repo-name.git</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Set up your environment variables (in a `.env` file):
            <pre><code>PORT=3000
DATABASE_URL=your_mongo_db_url
SESSION_SECRET=your_secret
            </code></pre>
        </li>
        <li>Start the server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>
    <h1>Usage</h1>
    <p>Visit <a href="http://localhost:3000">http://localhost:3000</a> to access the application.</p>
    <p>Sign up or log in to create and manage listings.</p>
    <h1>Dependencies</h1>
    <p>Here’s a list of the main dependencies used in the project:</p>
    <ul>
        <li>Express.js: <code>^4.x.x</code> - Fast, unopinionated, minimalist web framework for Node.js</li>
        <li>Mongoose: <code>^8.x.x</code> - MongoDB object modeling for Node.js</li>
        <li>Passport.js: <code>^0.6.x</code> - Authentication middleware for Node.js</li>
        <li>EJS: <code>^3.x.x</code> - Embedded JavaScript templating</li>
        <li>Leaflet.js: <code>^1.9.x</code> - JavaScript library for interactive maps</li>
        <li>Connect-flash: <code>^0.x.x</code> - Flash messages for Express</li>
        <li>Express-session: <code>^1.x.x</code> - Session middleware for Express</li>
    </ul>
    <p>Make sure to run <code>npm install</code> to install all the required dependencies listed in <code>package.json</code>.</p>
    <h1>Contributing</h1>
    <p>Feel free to contribute by submitting pull requests, reporting issues, or suggesting improvements!</p>
    <h1>License</h1>
    <p>This project is licensed under the MIT License - see the <a href="#">LICENSE</a> file for details.</p>
</body>
</html>
