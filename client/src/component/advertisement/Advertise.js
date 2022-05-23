import React from 'react';
import "../../js/swiper-bundle.min.js";

export default function Advertise() {
  return (
    <>
        <div className="advertisements">
              <h2 className="center">Advertisements</h2>
              <div className="swiper advertisement_slider mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={require("../../img/social1.jpeg")} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={require("../../img/social2.jpeg")} alt="" />
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
    </>
  )
}
