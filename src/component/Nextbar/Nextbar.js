import React from 'react';
import MultiItemCarousel from '../MultiItemCarousel/MultiItemCarousel';

const imageList = [
    { 
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_Home-Kitchen_DT_1_190x60_25thFeb21.jpg",
        alt:"altImage0"
    },
    {
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_EggsMeatFish_DT_2_190x60_25thFeb21.jpg",
        alt:"altImage1"
    },
    {
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_BeautyStore_DT_3_190x60_25thFeb21.jpg",
        alt:"altImage2"
    },
    {
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_bbStar_DT_4_190x60_25thFeb21.jpg",
        alt:"altImage3"
    },
    {
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_ComboStore_DT_5_190x60_25thFeb21.jpg",
        alt:"altImage4"
    },
    {
        src:"https://www.bigbasket.com/media/uploads/banner_images/All_DOW_DT_6_190x60_25thFeb21.jpg",
        alt:"altImage5"
    }
]

function BestSellerComponent() {
    return(
        <div className="best-seller-carousel">
           <MultiItemCarousel items={imageList}/>
        </div>
    );
}

export default BestSellerComponent;