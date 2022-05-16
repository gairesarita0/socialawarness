import React from 'react'
import Menu from '../header/menu';

function Post() {
  return (
    <div className="home-page">
        <Menu />
        <main className="page-content-container">
                    <div className="inner-container">
                    
                        <div className="single_post">
                            <div className="user_meta d-flex items-center">
                            <img src="img/user.png" alt="" className="user_icon" />
                            <p>Brenda E. Moss</p>
                            </div>
                            <div className="post_description">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officia voluptas.</p>
                            </div>
                            <div className="post_media">
                            <img src="img/Social_Awareness_img.jpg" alt="" />
                            </div>
                            <div className="CTA_btns">
                            <button className="edit_btn">Edit Post</button>
                            <button className="delete_btn">Delete Post</button>
                            </div>
                        </div>
                    </div>
                </main>
    </div>
  )
}

export default Post;