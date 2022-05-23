import React,{useEffect, useState} from 'react';
import Menu from '../header/menu';
import "../../css/style.css";
import axios from 'axios';
import {urlServer} from '../../urlVari';

function Profile() {
    const [user, setUser] = useState([]);

    useEffect(()=>{
    
        const fetchData = async () => {
          await axios.get( urlServer + "/api/users/current",{
              headers: {
                'Content-Type': 'multipart/form-data',
                accessToken: localStorage.getItem("accessToken")
              }
          }).then((response)=>{
         
          setUser(response.data);  
          
          });
        }
        fetchData();
    
      },[]);
    
    

  return (
    <div className="home-page">
    
        <Menu />
        <main className="page-content-container">
            <div className="inner-container">
            <h2 className="center">My Profile</h2>
            <form action="">
                <div className="d-flex">
                    <div className="col-1-2">
                        <label htmlFor="advt-name">User Name</label><br />
                        <input type="text" name="user-name" value={user.Name} />
                    </div>
                    <div className="col-1-2">
                        <label htmlFor="advt-cat">Mobile Number</label><br />
                        <input type="text" name="mobile-number" />
                    </div>
                    <div className="col-1-2">
                        <label htmlFor="advt-attach">Upload New Profile Picture</label><br />
                        <input type="file" accept="image/png, image/jpeg" name="upload-img" />
                    </div>
                    <div className="col-1-2">
                        <label htmlFor="advt-attach">Date of Birth</label><br />
                        <input id="date" type="date" name="DOB" />
                    </div>
                    <div className="col-1-2">
                        <label htmlFor="new_password">New Password</label>
                        <input
                        id="new_password"
                        type="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        />
                    </div>
                    <div className="col-1-2">
                        <label htmlFor="confirm-user-password">Confirm New Password</label>
                        <input
                        id="confirm-user-password"
                        type="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        />
                    </div>
                </div>
                <input className="update_record" type="submit" value="Update" />
            </form>
        </div>
    </main>
    </div>
  )
}

export default Profile;