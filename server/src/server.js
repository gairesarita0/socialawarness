import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

import cors from 'cors';
import bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken';
import path from 'path';


const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(cors());

// Routers 
const eventsRouter = require("../routes/Events");
app.use("/api/events",eventsRouter);


const {db} = require("../database");



app.post('/api/register', (req,res) => {
    const {uname,email,password} = req.body;
    bcrypt.hash(password, 10).then( async (hash) => {
    db.query("Insert into user (name,email,password) value (?,?,?)",[uname,email,hash],(err,result)=>{
            if(err){
                console.log(err);
                res.json({error:err});
            }
            else{
                res.json({success:"success"});
            }
        }); 
    });
    
});

/* login function */
app.post("/api/login", (req,res) =>{

    const { username, password } = req.body;
    db.query( "Select * from user where email = ? limit 1 ",[username], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{  
            const user = result[0];
            if (!user) {
                res.json({ error: "Username doesn't exist"});
            }
            
            else{
                    bcrypt.compare(password, user.Password).then((match) => {

                    if (!match)
                    {
                    
                        res.json({error:"Wrong username and password"});

                    }

                    else{

                        const accessToken = sign({username:user.Name,uid:user.uid,accesslevel:user.accesslevel}, "secretSarita");

                        res.json({accessToken: accessToken});
                    }

        });
        
    }
            
            
        }
    });

    
   
});




app.listen(8000,() => console.log("Listening on port 8000"));