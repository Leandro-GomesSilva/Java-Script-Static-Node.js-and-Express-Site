/* Adding dependencies */

const express = require('express');
const data = require('./data.json');
const projectRouter = require('./routes/projects');

/* Initializing Express App */

const app = express();

/* Setting up the middleware */

app.set('view engine', 'pug');
app.use( '/static', express.static('public') );


/* Setting up the main routes */

    // Home route
app.get('/', (req, res) => {  
    console.log("Home route called.");
    res.render('index', data );
});

    // About route
app.get('/about', (req, res) => {
    console.log("About route called.");
    res.render('about');
});

    // Project route
app.use('/project', projectRouter);


/* Error handlers */

// Avoiding the 404-error for missing a favicon.ico
app.get('/favicon.ico', (req, res) => {
    console.log("No favicon.ico available.");
    res.status(204);
});

// Handling 404 errors
app.use((req, res, next) => {
    const err = new Error("Page not found. The page you requested does not exist. Check details of the error on the screen. Click the link on the screen to return to the homepage.");
    err.status = 404;
    console.log(err.message, "Error status:", err.status);
    next(err);
});

// Global error handler
app.use((err, req, res, next) => {
    
    if (err.status === 404) {
        res.status(err.status);
        res.render( 'page-not-found', {err} );
    } else {
        err.status = err.status || 500;
        err.message = err.message || "Global error. Something went wrong. Check the Error Stack below.";
        console.log(err.message, "Error status:", err.status);
        res.status(err.status);
        res.render( 'error', {err} );                    
    }
});


/* Starting the server */

app.listen(3000, ()=> {
    console.log("The web application is being executed on localhost:3000");
});
