import express from "express";
import {validateToken} from '../middleware/AuthMiddleware';


const router =express.Router();
const {db} = require("../database");

router.get("/", (req,res)=>{
    db.query( "Select * from campaign where approve = 1", (err,result) =>{
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

router.get("/notapproved", (req,res)=>{
    db.query( "Select * from campaign where approve = 0 ", (err,result) =>{
        if(err){
            console.log(err)
        }
        else{  
            const camp = result;

            console.log(camp);

            res.json(camp)

                   
          
        }
    });

    
})


router.get("/listmypost",validateToken, (req,res)=>{
    const uid = req.user.uid;
    db.query( "Select * from campaign where uid = ? ",[uid], (err,result) =>{
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

router.get("/approve/:id", (req,res)=>{
    
    const id = req.params.id;
    db.query( "Update campaign SET approve = 1  where cmid = ? ",[id], (err,result) =>{
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

router.get("/reject/:id", (req,res)=>{
    
    const id = req.params.id;
    db.query( "Update campaign SET approve = 2  where cmid = ? ",[id], (err,result) =>{
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

router.get("/deleteCampaign/:id", (req,res)=>{
    
    const id = req.params.id;
    db.query( "Delete from campaign where cmid = ? ",[id], (err,result) =>{
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

router.post('/createEvent',validateToken, (req,res)=>{
    const title = req.body.title;
    const category = req.body.category;
    const date = req.body.date;
    const location = req.body.location;
    const description = req.body.description;
    const uid = req.user.uid;

    const file = req.files.file;
    let filename = '';

    console.log(req.body);
    if(req.files === null){
        ferror = "nofile";
    }

    else{
        let ts = Date.now();

         filename="events"+ts+file.name;
        
        file.mv(`${__dirname}/../src/public/uploads/${filename}`, err => {
            if (err){
                console.error(err);
                return res.status(500).send(err);
            }
            
        });

    }

    db.query("Insert into campaign (cname,category,description,location,date,image,uid) value (?,?,?,?,?,?,?)",[title,category,description,location,date,filename,uid],(err,result)=>{
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