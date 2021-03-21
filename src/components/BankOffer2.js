import React from 'react'
import ImageOne from "../assets/Bank/1.jpg"
import ImageTwo from "../assets/Bank/2.jpg"
import ImageThree from "../assets/Bank/3.jpg"
import ImageFour from "../assets/Bank/4.jpg"
import './BankOffer2.css';

const BankOffer2 = () => {
    return (
        <div>
            <div class="head123">Bank Offers</div>
    <div class="row">
  <div class="column">
  <div class="container">
    <img src={ImageOne} alt="Snow" width="100%"/>
    <div class="bottom-left"><b>₹150 instant discount*</b></div>
    <div class="bottom-left1">Minimum order ₹2500</div>
    <div class="bottom-left2">*Conditions Apply</div>
    </div>
  </div>
  <div class="column">
  <div class="container">
    <img src={ImageTwo} alt="Snow" width="100%"/>
    <div class="bottom-left"><b>Up to ₹400 Cashback*</b></div>
    <div class="bottom-left1">No minimum order</div>
    <div class="bottom-left2">*Conditions Apply</div>
    </div>
  </div>
  <div class="column">
  <div class="container">
    <img src={ImageThree} alt="Snow" width="100%"/>
    <div class="bottom-left"><b>₹150 instant discount*</b></div>
    <div class="bottom-left1">Minimum order ₹2000</div>
    <div class="bottom-left2">*Conditions Apply</div>
    </div>
  </div>
  <div class="column">
  <div class="container">
    <img src={ImageFour} alt="Snow" width="100%"/>
    <div class="bottom-left"><b>Up to ₹1000 discount*</b></div>
    <div class="bottom-left1">Minimum order ₹2000</div>
    <div class="bottom-left2">*Conditions Apply</div>
    </div>
  </div>
</div>
</div>
        
    )
  }
  
export default BankOffer2;