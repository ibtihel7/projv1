import React, { Component } from 'react';

const Itemavis = ({item}) => {
    return (
      
              <div>
              
           
  
     
          
            
              {/* Testimonials Slider */}
              <div className="testimonials_slider_container">
                <div className="owl-carousel owl-theme testimonials_slider">
                  {/* Slide */}
                  <div>
                    <div className="testimonial_text text-center">
                    {item.avis}
                      {/* <p>On behalf of Gomycode, we would like to thank iFood for participating in our Annual anniversary. We really appreciate your delicious appticisers, everything was delicious! We received lots of great comments about your services. Thank you for helping to make this year’s event the most successful ever.</p> */}
                    </div>
                    <div className="testimonial_author text-center">
                      <div className="testimonial_author_image"><img src={item.ima} alt /></div>
                      <div className="testimonial_author_name"><a href="#">{item.client},</a><span> Client</span></div>
                    </div>
                    <br/> <br/>
                  </div> </div>    </div>    </div>     
            


                );
              };








    


export default Itemavis;




























