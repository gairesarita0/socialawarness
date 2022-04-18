import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "socialdb",
});

app.post('/register', (req,res) => {

    const {uname,email,password} = req.body;
    db.query("Insert into user (name,email,password) value (?,?,?)",[uname,email,password],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});


app.get('/hello', (req,res)=> res.send('Hello!'));


app.listen(8000,() => console.log("Listening on port 8000"));