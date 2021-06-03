# JavaScript: Static Node.js and Express Site
 The 6th project on the Full Stack JavaScript Techdegree. This application is a back-end (or server-side) Express server used to display a fictional portfolio site, which showcases the projects I had built so far in my JavaScript Techdegree. It definies multiple routes, renders the corresponding templates passing objects with dynamic data and handles 404 errors and global errors. I also took the oportunity in this project to practice my CSS skills and concepts like flexbox, background animations and hover animations.

 Main technologies: JavaScript, Node.js, Express.js, CSS<br>
 Auxiliary technologies: HTML, Pug<br>
 Complexity level: Intermediate<br>
 Concepts: Routes, Middleware, HTTP requests, Request Object, Response Object, Server, Static Assets, Modularization, Pug Template rendering, CSS Background animation, CSS Hover animation, CSS Flexbox<br>


Documentation for the CSS changes for 'Exceeding Expectations':

A new file 'alternativeStyle.css' was added to the folder 'public/css'. Furthermore, there is in the top right corner of the screen a toogle buttom that will switch back and forth between the original CSS layout and my own-made CSS layout. The functionality for this button was implemented with JavaScript in the file 'script.js' ('public/js'). The changes in the CSS layout are:

1. Background animation with linear-gradient
2. Font type changed to 'Garamond'
3. The dominant color is now white (#c4c1c1). This was implemented in the 'alternativeStyle.css' file via multiple selector declarations.
4. The general font size was increased. This was implemented in the 'alternativeStyle.css' file via multiple selector declarations.
5. Multiple small changes on the rules for padding, margin rules and line heights (see 'alternativeStyle.css' file).
6. Shadow, border radius, transparent background and blur effect for the sidebar.
7. Shadow, border radius, transparent background and blur effect for the 'cells' (where the projects are listed on the home page), in order to achieve a 'glass effect'.
8. Hover rules for the 'cells' and the corresponding changes in the h5 element (with the project titles) and the img element (with the project thumbnail).
9. Button colors, hover effect and active effects.
10. Hover effect for anchor elements.
