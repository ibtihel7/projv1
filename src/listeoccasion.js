import React, { Component } from 'react';

import Itemoccasion from './itemoccasion';




const tab=[
    {Style:{backgroundImage: 'url(images/wedding.png)'},occasion:"Weddings"},
    {Style:{backgroundImage: 'url(images/anniv.jpg)'},occasion:"Anniversary"},
    {Style:{backgroundImage: 'url(images/gg.png)'},occasion:"Event Company"},
];

class Listoccasion extends Component {
    
    render() { 
        return ( <div className="list" >



        <div className="discover">
       
       <div className="discover_slider_container">
         <div className="owl-carousel owl-theme discover_slider">
 
            {
              tab.map((el,index)=> <Itemoccasion item={el} key={index}/>)  
            }
            
       
          
            </div>   </div>   </div>
        </div> )
    };
};

export default Listoccasion ;
