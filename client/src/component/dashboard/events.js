import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { urlServer } from "../../urlVari";

function Events() {

    const [listOfEvents, setListOfEvents] = useState([]);

    useEffect(()=>{
    
        const fetchData = async () => {
          await axios.get( urlServer + "/events/").then((response)=>{
          console.log(response.data);
          setListOfEvents(response.data);   
          });
        }
        fetchData();
    
      },[]);


  return (

    <div className="timeline">
        {listOfEvents.reverse().map((value, key) => {
            let img = urlServer+'/uploads/'+ value.image;
        return (
        <div className="single_post">
            <div className="user_meta d-flex items-center">
                  <p>{value.cname}</p>
                </div>
                <div className="post_description">
                  <p>{value.description}</p>
                  <p><strong>Venue:</strong> {value.location}</p>
                  <p><strong>Date:</strong> {value.date}</p>
                </div>
                <div className="post_media">
                    
                  <img src={img} alt="" />
                </div>
                <div className="post_comments">
                  <div className="user_meta d-flex items-center">
                    <img src={require("../../img/men-img.jpeg")} alt="" className="user_icon" />
                    <div className="user_comment">
                      <p>John Deo</p>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis unde placeat delectus.</span>
                    </div>
                    <input type="text" className="new_comment" placeholder="write new comment" />
                  </div> 
                </div>
              </div>
            );
        })
        }
    </div>
            
  )
}

export default Events;