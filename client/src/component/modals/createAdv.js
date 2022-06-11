import axios from "axios";
import React,{Fragment, useState} from "react";
import { urlServer } from "../../urlVari";

function CreateAdv({closeModel}) {


    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [title, setTitle] = useState('');
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
        formData.append('description', description);
        formData.append('file', file);
       
        try{
            const res = await axios.post(urlServer+'/api/adv/createAdv', formData,{
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
                    document.getElementById("eventMessage1").innerHTML = "Duplicate Email<br />";
                    document.getElementById("eventMessage1").style.color = "red";
                    document.getElementById("eventMessage1").style.marginBottom = "1em";


                }
                else{
                    document.getElementById("eventMessage1").innerHTML = "Sucessfully Added User you are being redirected to login page.<br />";
                    document.getElementById("eventMessage1").style.color = "Green";
                    document.getElementById("eventMessage1").style.marginBottom = "1em";
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
            { /*<!-- Modal 2 for advertisement --> */}
            <div id="myModal2" className="modal">
                    { /* <!-- Modal content --> */}
                    <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={()=>closeModel(false)}>&times;</span>
                        <h2>Post Advertisement</h2>
                        <div id="eventMessage1"></div>
                    </div>
                    <div className="modal-body">
                        <form action="">
                        <div className="d-flex">
                            <div className="col-1-2">
                            <label htmlFor="advt-name">Advertisement Title</label><br />
                            <input type="text" name="advt-name" onChange={(event)=>setTitle(event.target.value)} />
                            </div>
                            <div className="col-1-2">
                            <label htmlFor="advt-cat">Advertisement Category</label><br />
                            <input type="text" name="advt-cat" onChange={(event)=> setDescription(event.target.value)} />
                            </div>
                            <div className="col-1-2">
                                <label htmlFor="advt-attach">Attachments</label><br />
                                <input type="file" accept="image/png, image/jpeg" name="advt-attach" onChange={onChange}/>
                            </div>
                            <div className="progessBar" style={{ width: progress }}>
                                {progress}
                            </div>
                        </div>
                        <input type="submit" onClick={onSubmit} value="Submit" />
                        </form>
                    </div>
                    </div>
                </div>
        </>
    );
}

export default CreateAdv;