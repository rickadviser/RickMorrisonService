import React from 'react';
import { Component } from 'react';
import Expedia from '../assets/Expedia.png';
import Booking from '../assets/booking logo.png';
import CheapTickets from '../assets/CheapTickets.png';
import HotelsCom from '../assets/HotelsCom.png';
import OfficialHotelSite from '../assets/OfficialHotelSite.gif';
import TripAdvisor from '../assets/TripAdvisor.png';
import Priceline from '../assets/Priceline.png';

const SiteDisplay = (props) => {
  const viewDeal = (<div class="viewDeal">
    <span class="viewDealText">
      View Deal 
    </span>
  </div>)
  if (props.site) {
    if (props.site[0] === "OfficialHotelSite") {
      return (
        <div class="siteModule">
          <span>
            <img src={OfficialHotelSite} alt="OfficialHotelSite" width="120" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );    
    }
    if (props.site[0] === "Booking") {
      return (
        <div class="siteModule">
          <span>
            <img src={Booking} alt="Booking" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );  
    }
    if (props.site[0] === "Expedia") {
      return (
        <div class="siteModule">
          <span>
            <img src={Expedia} alt="Expedia" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === "CheapTickets") {
      return (
        <div class="siteModule">
          <span>
            <img src={CheapTickets} alt="CheapTickets" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === "Hotels") {
      return (
        <div class="siteModule">
          <span>
            <img src={HotelsCom} alt="HotelsCom" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === "TripAdvisor") {
      return (
        <div class="siteModule">
          <span>
            <img src={TripAdvisor} alt="TripAdvisor" height="20" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    }
    if (props.site[0] === "Priceline") {
      return (
        <div class="siteModule">
          <span>
            <img src={Priceline} alt="Priceline" height="45" />
          </span>
          <span class="sitePrice">
            ${props.site[1]}
          </span>
          {viewDeal}
        </div>
      );
    } else {
      return (
        <div>
          LOADING...
        </div>
      )
    }
  } else {
    return (
      <div>
        LOADING...
      </div>
    )
  }
  // return (
  //   <div>
  //     <span>
  //       <img src={Expedia} alt="Expedia" />
  //     </span>
  //   </div>
  // )
};

export default SiteDisplay;
