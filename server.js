const express=require('express')
var bodyParser = require('body-parser');
var user =require( './models/user');
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://surajhetc:simplilearn@cluster0.tutmx.mongodb.net/shop',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app= express();



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/register',(req,res)=>{

    

    if(req.body.password!=req.body.passwordRepeat)
    res.send("Password not same");

    console.log(req.body.username)

    newUser=new user();
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    newUser.save((err)=>{
        if(err)
        {
            res.send("Error in registering")
        }
        else
        res.send("Registration done")
    })
    
})
const PORT=8000
app.listen(PORT,()=>
console.log("Your app is running in ",PORT));