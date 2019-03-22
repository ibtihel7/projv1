import React, { Component } from 'react';

import Itemavis from "./itemavis";


const tab=[
    {avis:"On behalf of Gomycode, we would like to thank iFood for participating in our Annual anniversary. We really appreciate your delicious appticisers, everything was delicious! We received lots of great comments about your services. Thank you for helping to make this year’s event the most successful ever.                "
,ima:"images/ibtihel.jpg",client:"Ibtihel"},
{avis:"I engaged iFood to cater my wedding ceremony , the food was amazing! You did everything to make our cocktail party and reception dinner run smoothly and deliciously.Thank you iFood!",ima:"images/amen.jpg",client:"AmenAllah"},
{avis:"Last year, I choose iFood to celebrate my birthday, it was amazing strating from the cake to the drink.My guests were really happy of the delicious food and the luxury of the restaurant . iFood makes my day  memorable!"
,ima:"images/khouloud.jpg",client:"khouloud"},
];

class Listavis extends Component {
    
    render() { 
        return ( <div className="testimonials">
 

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
         {/* <div className="list" style={{paddingTop: "5%" }}> */}

            {
              tab.map((el,index)=> <Itemavis item={el} key={index}/>)  
            }
            
    
            </div> </div></div>  


</div> )
    };
};

export default Listavis ;






















