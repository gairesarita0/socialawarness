import React,{useState,useEffect} from 'react'
import Menu from '../header/menu';
import axios from 'axios';
import { urlServer } from "../../urlVari";
import Uselect from "./uselect";

function Users() {

  const [listOfUsers, setListOfUsers] = useState([]);
 

  useEffect(()=>{
    
    const fetchData = async () => {
      await axios.get( urlServer + "/api/users/listusers",{
          headers: {
            'Content-Type': 'multipart/form-data',
            accessToken: localStorage.getItem("accessToken")
          }
      }).then((response)=>{
      console.log(response.data);
      setListOfUsers(response.data);   
      });
    }
    fetchData();

  },[]);



 

  

  return (
    <div className="home-page">
        <Menu />
        <main className="page-content-container">
            <div className="inner-container">
      
                {listOfUsers.map((value,key) => 
    
                    {
                        { /*let img = urlServer+'/uploads/'+ value.image; */}
                       

                        return (
                            
                               <Uselect uvalue={value} key={key} /> 
                               
                               
                                
      
                    )}
    )}
    </div>
  </main>

    </div>
  )
}

export default Users;