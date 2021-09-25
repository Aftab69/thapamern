const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
//const cors = require("cors");
const app = express();

/* app.use(cors({
    origin: '*',
})); */

dotenv.config({ path: './config.env'});
require('./db/conn');
//const User = require("./model/userSchema");
app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;

/* const middleware = (req,res,next)=>{
    console.log(`Hello my middleware`);
    next();
}

app.get("/about",middleware, (req,res)=>{
    res.send(`Hello about world from server`);
    console.log('hi');
}); 
app.get("/contact", (req,res)=>{
    res.send(`Hello contact world from server`);
});
app.get("/signin", (req,res)=>{
    res.send(`Hello login world from server`);
});
app.get("/signup", (req,res)=>{
    res.send(`Hello registration world from server`);
}); */

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT || 5000, ()=>{
    console.log(`Server is running at port ${PORT}`)
});