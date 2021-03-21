import React from 'react'
import ImageOne from "../assets/Bank/1.jpg"
import ImageTwo from "../assets/Bank/2.jpg"
import ImageThree from "../assets/Bank/3.jpg"
import ImageFour from "../assets/Bank/4.jpg"
import './BankOffer1.css';

const BankOffer1 = () => {
    return (
        <div class="row">
  <div class="column">
  <div class="container1">
      <img src={ImageOne} alt="Mountains"/>
      <div class="centered1"><p className="the1">The</p><p className="hol1">hfdhdhncdhn</p><h6 className="ho1">Home & Kitchen Sale</h6></div>
      </div>
  </div>
  <div class="column">
    <div class="content">
    <img src={ImageTwo} alt="Lights"/>
      <h3>My Work</h3>
      <p>Offer</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
    <img src={ImageThree} alt="Nature"/>
      <h3>My Work</h3>
      <p>Offer</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
    <img src={ImageFour} alt="Mountains"/>
      <h3>My Work</h3>
      <p>Offer</p>
    </div>
  </div>
  </div>
        
    )
  }
  
export default BankOffer1;