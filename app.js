// Adding dependencies
const express = require('express');
const data = require('./data.json');

// Initializing Express App
const app = express();

// Setting up the middleware
app.set('view engine', 'pug');
app.use( '/static', express.static('public') );

// Setting main routes
app.get('/', (req, res) => {  
    res.render('index', data );
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    res.render('project', data.projects[id - 1]);
});

// Starting the server
app.listen(3000, ()=> {
    console.log("The app is being executed on localhost:3000");
});
