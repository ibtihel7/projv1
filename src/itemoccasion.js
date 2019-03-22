import React, { Component } from 'react';

const Itemoccasion = ({item}) => {
    return (<div className="slide">
              <div className="background_image" style={item.Style} />
              <div className="discover_overlay d-flex flex-column align-items-center justify-content-center">
                <h1><a href="#">{item.occasion}</a></h1>
              </div>
              </div>
                );
              };








    


export default Itemoccasion;
























