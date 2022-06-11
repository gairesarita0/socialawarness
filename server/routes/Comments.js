import express from "express";
import {validateToken} from '../middleware/AuthMiddleware';


const router =express.Router();
const {db} = require("../database");

router.get("/:cmid", (req,res)=>{
    console.log("hello");
    const cmid = req.params.cmid;
    db.query( "Select c.text,c.uid,c.cid,u.Name from comments c inner join user u  ON c.uid = u.uid where cmid = ?",[cmid], (err,result) =>{
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




router.post('/createComments',validateToken, (req,res)=>{
    const cmid = req.body.cmid;
    const uid = req.user.uid;
    const comment = req.body.comment;

    console.log(cmid,uid,comment);

    db.query("Insert into comments (uid,cmid,text) value (?,?,?)",[uid,cmid,comment],(err,result)=>{
        if(err){
            console.log(err);

            res.json({error:err});
        }
        else{

            res.json({success:"success"});
        }
    });
    
    
    
});

router.get("/deleteComment/:cid", (req,res)=>{
    
    const cid = req.params.cid;
    db.query( "Delete from comments where cid = ? ",[cid], (err,result) =>{
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