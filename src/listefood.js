import React, { Component } from 'react';

import Itemoccasion from './itemoccasion';




const tab=[
    {Style:{backgroundImage: 'url(images/s12.jpg)'},occasion:"Sweety"},
    {Style:{backgroundImage: 'url(images/m1.jpg)'},occasion:"Salty"},
    {Style:{backgroundImage: 'url(images/dr.jpg)'},occasion:"Drink"},
];

class Listfood extends Component {
    
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

export default Listfood ;
