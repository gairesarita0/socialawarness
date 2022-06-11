import React,{useEffect,useState, useContext} from 'react';
import axios from 'axios';
import { urlServer } from "../../urlVari";
import {AuthContext} from "../../helpers/authContext";


function  Comment({cmid}) {

  const { authState }= useContext(AuthContext);
  const [text,setText] = useState('');
  const [listOfComments, setListOfComments] = useState([]);
  const keypress = (event) =>{
        const formData = new FormData();
        formData.append('cmid', cmid);
        formData.append('comment', text);
    if (event.key === "Enter") {
      
      try{
            const res = axios.post(urlServer+'/api/comments/createComments', formData,{
                        headers: {
                                    accessToken: localStorage.getItem("accessToken")
                                },
                    }).then((response)=> {
                        if(response.data.error){
                            
                         
                              console.log(response.data.error)
                          }
                          else{
                            
                            fetchData();
                            document.getElementById(cmid).value ='';                        }
                     });
        

                } catch(err){

              }
           }
            
          }


  // Fetch Comment data
    const fetchData = async () => {
          await axios.get( urlServer + "/api/comments/"+cmid).then((response)=>{

          setListOfComments(response.data);   
          });
        }


//delete
  const deleteComments = async (cid) =>{
          
      
            await axios.get( urlServer + "/api/comments/deleteComment/"+cid,
              {
                headers: {
                          'Content-Type': 'multipart/form-data',
                          accessToken: localStorage.getItem("accessToken")
                          }
              }).then((response)=>{
              fetchData();
      
                
            });
            
          
          
      }





    useEffect(()=>{

        
        fetchData();
        
       
    
      },[]);

      

  return (


          <div className="post_comments">
            <div className="user_meta items-center">
                
                <hr></hr>
                {listOfComments.map((value,key) => {
                    return (
                      <>
                        <div className="user_comment items-center flex-wrap " key={key}>
                        <p>{value.Name}</p>
                        <span>{value.text}</span>
                        { authState.uid === value.uid &&

                          <span className="items-right"> 
                              <button onClick={()=>deleteComments(value.cid)} className="delbut"> 
                                <img  src={urlServer+ "/img/delete.png"} />
                              </button>
                          </span>
                        
                        }
                        
                        <hr></hr>
                      
                        </div>
                        
                        </>
                    )
                })}
                  
                
                { authState.accesslevel ? (
                  <input id={cmid} onKeyUp={keypress} type="text" className="new_comment" onChange={(event)=>setText(event.target.value)} placeholder="write new comment" />
                ) : (
                    <div  className="new_comment commentNo" id={cmid} >Log in to comment</div>
                )
                }
                
              </div> 
            </div>
             
        
    
            
  )
}

export default Comment;