import React, { Component } from 'react';

class Indoor  extends Component {
  
  render() { 
    return (  
      
              <div>
    <div className="rooms_left container_wrapper">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-xl-6">
              <div className="rooms_left_content">
                <div className="section_title">
                  {/* <div>Rooms</div> */}
                  <h1>IN DOOR</h1>
                </div>
                <div className="rooms_text">
                <p>If you've decided to have an indoor ceremony, congratulations!
                    <br/> We provide all the options you wanted! </p>
                </div>
                <div className="rooms_list">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Daytime / Evening</span>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Hotel / Restaurant Halls</span>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Special Menu</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="rooms_price">$89/<span>Night</span></div> */}
                <div className="button rooms_button"><a href="#">See all the options</a></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="rooms_slider_container">
                <div className="owl-carousel owl-theme rooms_slider">
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/INDO.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/INDOOR.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/IN.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/INin.jpg)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


                    </div>
                  );
                }
              };


    


export default Indoor;