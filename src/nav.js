import React, { Component } from 'react';

class Nav  extends Component {
  
  render() { 
    return (  
      
              <div>
              


 <header className="header">
        <div className="header_content d-flex flex-column align-items-center justify-content-lg-end justify-content-center">
          {/* Logo */}
          <div className="logo"><a href="#"><img className="logo_1" src="images/logo.png" alt /><img className="logo_2" src="images/logo_2.png" alt /><img className="logo_3" src="images/logo_3.png" alt /></a></div>
          {/* Main Nav */}
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li className="active"><a href="index-2.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="rooms.html">Rooms</a></li>
              <li><a href="blog.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          {/* Social */}
          <div className="social header_social">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
            </ul>
          </div>
          {/* Header Right */}
          <div className="header_right d-flex flex-row align-items-center justify-content-start">
            {/* Search Activation Button */}
            <div className="search_button">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="512px" height="512px">
                <g>
                  <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" fill="#FFFFFF" />
                </g>
              </svg>
            </div>
            {/* Header Link */}
            <div className="header_link"><a href="#">Book Your Room Now</a></div>
            {/* Hamburger Button */}
            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true" /></div>
          </div>
          {/* Search Panel */}
          <div className="search_panel">
            <div className="search_panel_content d-flex flex-row align-items-center justify-content-start">
              <img src="images/search.png" alt />
              <form action="#" className="search_form">
                <input type="text" className="search_input" placeholder="Type your search here" required="required" />
              </form>
              <div className="search_close ml-auto d-flex flex-column align-items-center justify-content-center"><div /></div>
            </div>
          </div>
        </div>
      </header>

  


                    </div>
                  );
                }
              };


    


export default Nav;