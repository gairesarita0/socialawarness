import React,{useState,useEffect} from 'react'
import Menu from '../header/menu';
import axios from 'axios';
import { urlServer } from "../../urlVari";

function Post() {

  const [listOfEvents, setListOfEvents] = useState([]);

  useEffect(()=>{
    
    const fetchData = async () => {
      await axios.get( urlServer + "/api/events/listmypost",
                      {
                        headers: {
                                  'Content-Type': 'multipart/form-data',
                                  accessToken: localStorage.getItem("accessToken")
                                  }
                      }).then((response)=>{
                      console.log(response.data);
                      setListOfEvents(response.data);   
                    });
                  }
    fetchData();

  },[]);

  const deleteEvents = async (id) =>{
    let text = "Do you really want to delete?";
    
    if ( window.confirm (text)) {

      await axios.get( urlServer + "/api/events/deleteCampaign/"+id,
        {
          headers: {
                    'Content-Type': 'multipart/form-data',
                    accessToken: localStorage.getItem("accessToken")
                    }
        }).then((response)=>{
        window.location.href = "/post"

          
      });
      
    } else {
      text = "You canceled!";
    }
    
}

  


  return (
    <div className="home-page">
        <Menu />
        <main className="page-content-container">
            <div className="inner-container">
                {listOfEvents.reverse().map((value, key) => {
                  let img = urlServer+'/uploads/'+ value.image;
                    return (
                    
                        <div className="single_post" key={key}>
                            <div className="user_meta d-flex items-center">
                              <p>{value.cname}</p>
                            </div>
                            <div className="post_description">
                              <p>{value.description}</p>
                              <p><strong>Venue:</strong> {value.location}</p>
                              <p><strong>Date:</strong> {value.date}</p>
                            </div>
                        <div className="post_media">
                            <img src={img } alt="" />
                        </div>
                            <div className="CTA_btns">
                            <button className="edit_btn" >Edit Post</button>
                            <button className="delete_btn" onClick={()=>deleteEvents(value.cmid)}>Delete Post</button>
                            </div>
                        </div>
                )})}
                    </div>
                
                </main>
    </div>
  )
}

export default Post;