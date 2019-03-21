import React, { Component } from 'react';
// import im from 'C:/Users/ASUS/Desktop/projjjjjjjjjjjjj/src/3.jpg'

class Introduction  extends Component {
  
  render() { 
    return (  
      
            
<div>
<div className="intro">
<div className="background_image" style={{backgroundImage: 'url(images/int.jpg)'}} />


        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="int.jpg" data-speed="0.8" />
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
    
                <div>Welcome <br/></div>
                {/* <br/><div>to iFood event</div> */}
<br/>
                {/* <img src="images/int.jpg" /> */}

              </div>
            </div>
          </div>
          
          
      </div>
      <div className="row intro_row">
            <div className="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1">
            <div className="section_title text-center">
            <div className ="food">I-FOOD EVENT<br/></div>   </div> <br/>
              <div className="intro_text text-center">
              <br/> <br/>
                <h3>No matter the occasion, plan your event with Unique Venues, and get ready to raise a glass to a luxury  
                  look and  a successful celebration!

                </h3>
              </div>
          
          </div>
          </div>
          </div>          );
                }
              };


    


export default Introduction;