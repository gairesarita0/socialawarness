import React,{useState} from 'react'
import axios from 'axios';
import { urlServer } from "../../urlVari";

function UserAccessSelect({uvalue,skey}) {

    

    const [select, setSelect] = useState(uvalue.accesslevel);

    const ChangeAccess = async (id,access) => {
        
        await axios.get( urlServer + "/api/users/level/"+id+"/"+access).then((response)=>{
        console.log(response.data);
        alert("Approved") ;  
        
        });

    }

 

  

  return (
                       
        
                                <div className="single_post" key={skey} >
                                <div className="user_meta d-flex items-center">
                                    <p>{uvalue.Name}</p>
                                </div>
                                <div className="user_roles">
                                    <label htmlFor="user-roles">Assign User Role: </label>
                                    <select name="user-roles" value={select} onChange={(e)=>{setSelect(e.target.value)}}>
                                        <option value="1">User</option>
                                        <option value="2">Organization</option>
                                        <option value="3">Administrator</option>
                                    </select>
                                    
                                </div>
                                <div className="CTA_btns">
                                
                                    <button className="edit_btn" onClick={()=>ChangeAccess(uvalue.uid,select)}>Approve</button>
                                    
                                </div>
      </div>
    )
}


export default UserAccessSelect;