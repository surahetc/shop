
const routes = require('./routes');
const express=require('express')
var bodyParser = require('body-parser');
var user =require( './models/user');
const mongoose=require('mongoose');
var jwt = require('jsonwebtoken');



mongoose.connect('mongodb+srv://surajhetc:simplilearn@cluster0.tutmx.mongodb.net/shop',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app= express();
const port = 5000;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/', routes);


app.post('/login', (req,res)=>
{

     user.findOne({username:req.body.username,password:req.body.password},(err,data)=>{
        if(err)
        {
            res.send("User not found");
        }
        if(data)
        {
          res.send(`Welcome ${data.username}`)
        }
        
        else
        {
          res.send("Error ");
        }
        
    })
})



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
            res.send("User already exists")
        }
        else
        res.send("Registration done")
    })

//     newUser.save().then(user => {
//                                     jwt.sign({ id: user.username },"this is the secret text!!!!",{ expiresIn: 3600 },(err, token) => {
//                                                                                                                                     if(err) throw err;
//                                 res.json({
//                                     token,
//                                     user: {
//                                         username:user.username
//                                     }
//                                 });
//                             }
//                         )
//                     });
    
});

app.listen(port, () => {
    console.log("Server running at ",port)
  })