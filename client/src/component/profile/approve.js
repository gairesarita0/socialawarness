import React,{useState,useEffect} from 'react'
import Menu from '../header/menu';
import axios from 'axios';
import { urlServer } from "../../urlVari";

function Approve() {

  const [listOfEvents, setListOfEvents] = useState([]);

  useEffect(()=>{
    
    const fetchData = async () => {
      await axios.get( urlServer + "/api/events/notapproved").then((response)=>{
      console.log(response.data);
      setListOfEvents(response.data);   
      });
    }
    fetchData();

  },[]);

  const approve = async (id) => {

     

      await axios.get( urlServer + "/api/events/approve/"+id).then((response)=>{
      console.log(response.data);
      alert("Approved") ;  
      window.location.href ="/approve";
      });

  }

  const reject = async (id) => {

    await axios.get( urlServer + "/api/events/reject/"+id).then((response)=>{
    console.log(response.data);
    alert("Rejected") ;  
    window.location.href ="/approve";
    });

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
          <button className="edit_btn" onClick={()=>approve(value.cmid)}>Approve</button>
          <button className="delete_btn" onClick={()=>reject(value.cmid)}>Reject</button>
        </div>
      </div>
    )}
    )};
    </div>
  </main>

    </div>
  )
}

export default Approve;