import axios from "axios";
import React,{Fragment, useState} from "react";
import { urlServer } from "../../urlVari";

function CreatePost({closeModel}) {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [title, setTitle] = useState('');
    const [category, setCategory ] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [progress, setProgess] = useState(0);

    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('date', date);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('file', file);
       
        try{
            const res = await axios.post(urlServer+'/events/createEvent', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    accessToken: localStorage.getItem("accessToken")
                },
                onUploadProgress: (ProgressEvent) => {
                    let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress);
                }
                
        

            }).then((response)=> {
                if(response.data.error){
                    document.getElementById("eventMessage").innerHTML = "Duplicate Email<br />";
                    document.getElementById("eventMessage").style.color = "red";
                    document.getElementById("eventMessage").style.marginBottom = "1em";


                }
                else{
                    document.getElementById("eventMessage").innerHTML = "Sucessfully Added User you are being redirected to login page.<br />";
                    document.getElementById("eventMessage").style.color = "Green";
                    document.getElementById("eventMessage").style.marginBottom = "1em";
                    setTimeout(() => {
                        window.location.href = "/";
                        
                    }, 1000);
                    
                }
            });
            

        } catch(err){

        }
    }
   
    return (  
        <>
            <label>hello</label>
              { /* -- The Modal --> */}
            <div id="myModal" className="modal">
                {/*<!-- Modal content --> */}
                <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={()=>closeModel(false)}>&times;</span>
                    <h2>Post Event</h2>
                    <div id="eventMessage"></div>
                </div>
                <div className="modal-body">
                    <form action="">
                    <div className="d-flex">
                        <div className="col-1-2">
                        <label htmlFor="event-name">Event Title</label><br />
                        <input type="text" name="event-name" onChange={(event)=>setTitle(event.target.value)} />
                        </div>
                        <div className="col-1-2">
                        <label htmlFor="event-cat">Event Category</label><br />
                        <input type="text" name="event-cat" onChange={(event)=> setCategory(event.target.value)} />
                        </div>
                        <div className="col-1-2">
                        <label htmlFor="event-location">Event Location</label><br />
                        <input type="text" name="event-location" onChange={(event)=> setLocation(event.target.value)}/>
                        </div>
                        <div className="col-1-2">
                        <label htmlFor="event-date">Event Date</label><br />
                        <input type="date" name="event-date" onChange={(event)=> setDate(event.target.value)} />
                        </div>
                        <div className="col-1-2">
                                <label htmlFor="advt-attach">Image</label><br />
                                <input type="file" accept="image/png, image/jpeg" onChange={onChange} name="advt-attach" />
                        </div>
                    </div>
                    <div className="event_desc">
                        <label htmlFor="event-desc">Event Description</label><br />
                        <textarea name="event-desc" id="" cols="30" rows="10" onChange={(event)=> setDescription(event.target.value)}></textarea>
                    </div>
                    <div className="progessBar" style={{ width: progress }}>
                            {progress}
                    </div>
                    <input type="submit" onClick={onSubmit} value="Submit" />
                    </form>
                </div>
                </div>
            </div>
        </>
    );
}

export default CreatePost;