# MERN Stack Social Media App

-   Based on project by [LamaDev](https://www.youtube.com/watch?v=ldGl6L4Vktk&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy)
-   View the Front end [here](https://github.com/kawgh1/mern-social-media-react)

## Tools Used

-   **npm install express mongoose dotenv helmet morgan nodemon**

-   ### Express
    -   App Server will run on Express
-   ### MongoDB
    -   Set up MongoDB Cloud Cluster online
        -   https://cloud.mongodb.com
            -   For DB User and IP Address Config go to
                -   Network Access - Atlas - IP AcessList
-   ### Mongoose
    -   Helps create models inside MongoDB like Documents for Users, Posts, etc.
    -   Documentation: https://mongoosejs.com/docs/connections.html
        -   mongoose.connect('mongodb://localhost:27017/myapp');
        -   mongoose.connect('mongodb://username:password@host:port/database?options...');
-   ### Dotenv
    -   Used to securely store MongoDB URLs, usernames and passwords to access the DB functions
-   ### Helmet
    -   Helps with making secure server requests by modifying headers
-   ### Morgan
    -   Server Request Logging Middleware - helps log server requests, results, data, etc.
        -   ::ffff:127.0.0.1 - - [09/Sep/2021:05:03:56 +0000] "GET /api/auth HTTP/1.1" 200 19
-   ### Nodemon
    -   Live Dev Server
        -   package.json
            -   "scripts": {
                "start": "nodemon index.js"
                },
-   ### Bcrypt
    -   For password hashing in database
