import React, { Component } from 'react';

class Testimonial  extends Component {
  
  render() { 
    return (  
      
              <div>
              
           
  
              <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <div>Clients</div>
                <h1>Testimonials</h1>
              </div>
            </div>
          </div>
          <div className="row testimonials_row">
            <div className="col">
              {/* Testimonials Slider */}
              <div className="testimonials_slider_container">
                <div className="owl-carousel owl-theme testimonials_slider">
                  {/* Slide */}
                  <div>
                    <div className="testimonial_text text-center">
                      <p>On behalf of Gomycode, we would like to thank iFood for participating in our Annual anniversary. We really appreciate your delicious appticisers, everything was delicious! We received lots of great comments about your services. Thank you for helping to make this year’s event the most successful ever.</p>
                    </div>
                    <div className="testimonial_author text-center">
                      <div className="testimonial_author_image"><img src="images/ibtihel.jpg" alt /></div>
                      <div className="testimonial_author_name"><a href="#">Ibtihel,</a><span> Client</span></div>
                    </div>
                  </div>
                  {/* Slide */}
                  <div>
                    <div className="testimonial_text text-center">
                      <p>I engaged iFood to cater my wedding ceremony , the food was amazing! You did everything to make our cocktail party and reception dinner run smoothly and deliciously</p>
                      <p>Thank you iFood!</p>

                    </div>
                    <div className="testimonial_author text-center">
                      <div className="testimonial_author_image"><img src="images/amen.jpg" alt /></div>
                      <div className="testimonial_author_name"><a href="#">AmenAllah,</a><span> Client</span></div>
                    </div>
                  </div>
                  {/* Slide */}
                  <div>
                    <div className="testimonial_text text-center">
                      <p> Last year, I choose iFood to celebrate my birthday, it was amazing strating from the cake to the drink.      My guests were really happy of the delicious food and the luxury of the restaurant . </p>
                      <p> iFood makes my day  memorable! </p>
                    </div>
                    <div className="testimonial_author text-center">
                      <div className="testimonial_author_image"><img src="images/khouloud.jpg" alt /></div>
                      <div className="testimonial_author_name"><a href="#">Khouloud,</a><span> Client</span></div>
                    </div>
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


    


export default Testimonial ;




























