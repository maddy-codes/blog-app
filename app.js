const express = require('express'); //importing the express module, after npm installing it ofc.
const app = express(); //making an app for the express to finally define the routes and stuff.
const port = 3000; //this is the port the the application will listen to.
app.listen(port, ()=>{
    console.log(`HTTP Server started at http://localhost:${port}`);
})
    

//defining the root route
app.get('/', (req, res) => {
    res.send("<H1>Welcome to my blog site!!</H1>");
;})

app.get('/posts', (req, res) => {
    const posts = [
        { title: 'Post 1', content: 'This is the first post.' },
        { title: 'Post 2', content: 'This is the second post.' }
    ];
    res.json(posts);
});