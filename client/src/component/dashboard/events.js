import React,{useEffect,useState, useContext} from 'react';
import axios from 'axios';
import { urlServer } from "../../urlVari";
import Comment from './comments';

function Events() {



    const [listOfEvents, setListOfEvents] = useState([]);

    useEffect(()=>{
    
        const fetchData = async () => {
          await axios.get( urlServer + "/api/events/").then((response)=>{
            console.log(response.data);

          setListOfEvents(response.data);   
          });
        }
        fetchData();
    
      },[]);

  

  return (

    <div className="timeline">
        {listOfEvents.map((value, key) => {
            let img = urlServer+'/uploads/'+ value.image;
        return (
          <div className="single_post" key={key}>
              <div className="user_meta d-flex items-center">
                    <p >{value.cname}</p>
              </div>

              <div className="post_description">
                  <p>{value.description}</p>
                  <p><strong>Venue:</strong> {value.location}</p>
                  <p><strong>Date:</strong> {value.date}</p>
              </div>
                
              <div className="post_media"> 
                  <img src={img} alt="" />
              </div>
              <Comment cmid={value.cmid} />
             
              </div>
            );
        })
        }
    </div>
            
  )
}

export default Events;