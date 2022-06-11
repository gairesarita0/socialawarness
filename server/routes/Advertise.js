import express from "express";
import {validateToken} from '../middleware/AuthMiddleware';


const router =express.Router();
const {db} = require("../database");

router.get("/", (req,res)=>{
    db.query( "Select * from ad", (err,result) =>{
        if(err){
            console.log(err)
        }
        else{  
            const camp = result;

            console.log(camp);

            return res.json(camp)
                   
          
        }
    });

    

    
})




router.post('/createAdv',validateToken, (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;

    const file = req.files.file;
    let filename = '';

    console.log(req.body);
    if(req.files === null){
        ferror = "nofile";
    }

    else{
        let ts = Date.now();

         filename="adv"+ts+file.name;
        
        file.mv(`${__dirname}/../src/public/uploads/${filename}`, err => {
            if (err){
                console.error(err);
                return res.status(500).send(err);
            }
            
        });

    }

    db.query("Insert into ad (title,addescription,adimage) value (?,?,?)",[title,description,filename],(err,result)=>{
        if(err){
            console.log(err);
            res.json({error:err});
        }
        else{
            res.json({success:"success"});
        }
    });
    
    
    
});




module.exports = router;