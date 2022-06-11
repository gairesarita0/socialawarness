import React,{useContext, useState, useEffect} from "react";

import { AuthContext } from "../../helpers/authContext"
import "../../css/swiper-bundle.min.css";
import "../../css/style.css";


import Menu from "../header/menu";
import Events from "./events";

import Modalpost from "../modals/createPost";
import Modaladv from "../modals/createAdv";
import Advertise from "../advertisement/Advertise";



function Dashboard() {

  
  const { authState }= useContext(AuthContext);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openAdvModal,setOpenAdvModal] = useState(false);
  

    
  return (
    
    <div  className="home-page" >
     <Menu />
     
    <main className="page-content-container">
    
      <div className="container">
        <div className="d-flex space-between">
          
          <div className="timeline_container">
                {
                  (authState.accesslevel ===2 || authState.accesslevel ===3 ) &&

                  <div className="Popup_btns">
                    <button id="myBtn" type="button" onClick={()=>setOpenPostModal(true)} className="add_post_button">Post Event</button>
                    {authState.accesslevel== 3 &&
                    
                    <>
                      <button id="myBtn2" type="button" onClick={()=>setOpenAdvModal(true)} className="add_adv_btn">Post Advertisement</button>
                      {openAdvModal && <Modaladv closeModel={setOpenAdvModal} /> }
                    </>
                    }

                    {openPostModal && <Modalpost closeModel={setOpenPostModal} />}
                    
                  </div>

                }
                
                <Events />
            
          </div>
          <Advertise />
        </div>
      </div>
    </main>
    { /* -- HTML MODALS-- */}

 

      <footer className="site-footer">
      <div className="container">
        <span className="center">All Rights Reserved By Socail Awareness | 2022</span>
      </div>
    </footer>

    
  
    </ div>

  
  
    

  );

  
}

export default Dashboard;