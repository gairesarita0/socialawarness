import React from "react";

function createAdv({closeModel}) {

   
    return (
        <>
            { /*<!-- Modal 2 for advertisement --> */}
            <div id="myModal2" className="modal">
                    { /* <!-- Modal content --> */}
                    <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={()=>closeModel(false)}>&times;</span>
                        <h2>Post Advertisement</h2>
                    </div>
                    <div className="modal-body">
                        <form action="">
                        <div className="d-flex">
                            <div className="col-1-2">
                            <label htmlFor="advt-name">Advertisement Title</label><br />
                            <input type="text" name="advt-name" />
                            </div>
                            <div className="col-1-2">
                            <label htmlFor="advt-cat">Advertisement Category</label><br />
                            <input type="text" name="advt-cat" />
                            </div>
                            <div className="col-1-2">
                                <label htmlFor="advt-attach">Attachments</label><br />
                                <input type="file" accept="image/png, image/jpeg" name="advt-attach" />
                            </div>
                        </div>
                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                    </div>
                </div>
        </>
    );
}

export default createAdv;