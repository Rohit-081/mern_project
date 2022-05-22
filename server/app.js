const express = require('express');
const app = express();
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken'); 

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));
const PORT = process.env.PORT;

//Middleware
const middleware = (req, res, next) => {
    console.log(`Hello my middleware `);
    next;
}

middleware();

app.get('/', (req,res) => {
    res.send(`Hello world from the server app.js`);
});

app.get('/about', middleware, (req,res) => {
    res.send(`Hello About World from the server`);
    n
});

app.get('/contact', (req,res) => {
    res.send(`Hello Contact World from the server`);
});
app.get('/signin', (req,res) => {
    res.send(`Hello SignIn World from the server`);
});

app.get('/signup', (req,res) => {
    res.send(`Hello SignUp World from the server`);
});




app.listen(PORT, () => {console.log(`Server is running ${PORT}`);})