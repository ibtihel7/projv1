import React, { Component } from 'react';

class Rooms  extends Component {
  
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
                  <h1>Luxury Single Room</h1>
                </div>
                <div className="rooms_text">
                  <p>Maecenas sollicitudin tincidunt maximus. Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus. Morbi tempus malesuada erat sed pellentesque.</p>
                </div>
                <div className="rooms_list">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Morbi tempus malesuada erat sed</span>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Tempus malesuada erat sed</span>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <img src="images/check.png" alt />
                      <span>Pellentesque vel neque finibus elit</span>
                    </li>
                  </ul>
                </div>
                <div className="rooms_price">$89/<span>Night</span></div>
                <div className="button rooms_button"><a href="#">book now</a></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="rooms_slider_container">
                <div className="owl-carousel owl-theme rooms_slider">
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/rooms_2.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/rooms_2.jpg)'}} />
                  </div>
                  <div className="slide">
                    <div className="background_image" style={{backgroundImage: 'url(images/rooms_2.jpg)'}} />
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


    


export default Rooms;