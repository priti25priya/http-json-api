const express = require("express");
require("./db/conn");
const User = require("./models/users");
const app = express();
const port = process.env.PORT || 8000;

// create a new users

app.get("/users/<19BCB0111>",(req,res)=> {
    console.log(req.body);
    const user = new User(req.body)
    res.send("hello");



app.post("/posts/users/<19BCB0111>",(req,res)=> {
    console.log(req.body);
    const user = new User(req.body)
    res.send("hello");

})
app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
})