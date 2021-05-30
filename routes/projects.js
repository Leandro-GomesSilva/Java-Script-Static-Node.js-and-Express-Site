/* Adding dependencies */

const express = require('express');
const router = express.Router();
const data = require('../data.json');

/* Routing "/projects" */
router.get('/', (req, res) => {
    console.log("'/project' is not a valid route. Redirecting to home route.");     // To enhance user experience, the route '/project' will not be handled as a 404-error but rather will redirect to give the user another chance to choose a valid project.
    res.render('index', data );
});

/* Routing project IDs and handling invalid project IDs */
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    // Checking if the ID is a valid project ID and rendering the corresponding template
    if ( id > 0 && id <= data.projects.length ) {
        console.log(`Project ${id} route called.`);
        res.render('project', data.projects[id - 1]);
    } else {
        const err = new Error(`${id} is an invalid Project ID. Terminating.`);      // Error object
        err.status = 404;       // Status 404
        console.log(err.message, "Error status:", err.status);      // Logging the Error message and status on the console
        next(err);
    }
});

module.exports = router;