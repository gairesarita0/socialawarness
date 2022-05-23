import express from "express";
import {validateToken} from '../middleware/AuthMiddleware';


const router =express.Router();
const {db} = require("../database");


// List all users
router.get("/listusers",validateToken, (req,res)=>{
   
    db.query( "Select * from user ", (err,result) =>{
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


// change access level
router.get("/level/:id/:access", (req,res)=>{
    
    const id = req.params.id;
    const access = req.params.access;
    db.query( "Update user SET accesslevel = ?  where uid = ? ",[access,id], (err,result) =>{
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

router.get("/current",validateToken, (req,res)=>{
    const uid = req.user.uid;
    db.query( "Select * from user where uid = ? ",[uid], (err,result) =>{
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








module.exports = router;