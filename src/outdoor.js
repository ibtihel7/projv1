import React, { Component } from 'react';

class Outdoor  extends Component {
  
  render() { 
    return (  
      
              <div>


<div className="rooms_right container_wrapper">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-xl-6 order-xl-1 order-2">
              <div className="rooms_slider_container">
                <div className="owl-carousel owl-theme rooms_slider">
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/OUT.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/OUTT.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/OU.jpg)'}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-xl-2 order-1">
              <div className="rooms_right_content">
                <div className="section_title">
                  <h1>OUT DOOR</h1>
                </div>
                <div className="rooms_text">
                  <p>If you've decided to have an outdoor ceremony, congratulations!
                    <br/> We provide all the options you wanted! </p>
                </div>
                <div className="rooms_list">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Daytime/Evening</span>
                    </li>
                  
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>On the beach / By The Lake / In the Garden</span>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Outdoor ceremony menu</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="rooms_price">$129/<span>Night</span></div> */}
                <div className="button rooms_button"><a href="#">See all the options</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
                    </div>
                  );
                }
              };


    


export default Outdoor;