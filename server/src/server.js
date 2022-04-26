import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import cors from 'cors';
import bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json());
app.use(cors());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "socialdb",
});

app.post('/register', (req,res) => {
    const {uname,email,password} = req.body;
    bcrypt.hash(password, 10).then( async (hash) => {
     await db.query("Insert into user (name,email,password) value (?,?,?)",[uname,email,hash],(err,result)=>{
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
app.post("/login", (req,res) =>{

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

                        const accessToken = sign({username:user.Name}, "secretSarita");

                        res.json({accessToken: accessToken});
                    }

        });
        
    }
            
            
        }
    });

    
   
});






app.get('/hello', (req,res)=> res.send('Hello!'));


app.listen(8000,() => console.log("Listening on port 8000"));