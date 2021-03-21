import React from 'react'
import styled from "styled-components";
import ImageThree from "../assets/23.png"
import ImageFour from "../assets/24.png"


export default function List1() {
    let ImageArr = [ImageThree, ImageFour];
    return (
        <SmartBasketContainer>
            <span>
                <SmartBasketHeader>
                <span>
                       <h5> <b>Home and</b>
                       <br></br>
                       <b>Kitchen</b></h5>
                    </span>
                <span>
                       <h5> <b>Eggs, Meat</b>
                       <br></br>
                       <b>and Fish</b></h5>
                    </span>
                    
            <span>
            {
                ImageArr.map((image, index) => (
                    <img src={image} key={index} />
                ))
            }
            </span>
        
                <span>
                       <h5><b>Combo store</b></h5>
                    </span>
                <span>
                       <h5> <b>Deals</b>
                       <br></br>
                       <b>of the Week</b></h5>
                    </span>
                </SmartBasketHeader>
            </span>
        </SmartBasketContainer>
    )
}


const SmartBasketContainer = styled.div`
width:100%;
display: flex;
justify-content: center;
margin: 20px 0px;

>span {
    width: 80%;
}
`;

const SmartBasketHeader = styled.div`
    display: flex;
    margin: 10px 0;
    >span:nth-child(1) {
        margin-left: 45%;
        font-size: 24px;
    }

    >span:nth-child(1) {
        margin-left: auto;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 195px;
        height: 60px;
        border-radius: 5px;
        background-color: Gainsboro;
        color: black;
        font-size: 15px;
        text-align: center;
    }
    >span:nth-child(2) {
        margin-left: 45%;
        font-size: 24px;
    }

    >span:nth-child(2) {
        margin-left: auto;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 195px;
        height: 60px;
        border-radius: 5px;
        background-color: Gainsboro;
        color: black;
        font-size: 15px;
        text-align: center;
    }
    >span:nth-child(4) {
        margin-left: 45%;
        font-size: 24px;
    }

    >span:nth-child(4) {
        margin-left: auto;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 195px;
        height: 60px;
        border-radius: 5px;
        background-color: Gainsboro;
        color: black;
        font-size: 15px;
        text-align: center;
    }
    >span:nth-child(5) {
        margin-left: 45%;
        font-size: 24px;
    }

    >span:nth-child(5) {
        margin-left: auto;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 195px;
        height: 60px;
        border-radius: 5px;
        background-color: Gainsboro;
        color: black;
        font-size: 15px;
        text-align: center;
    }
    > span:nth-child(3) {
        width: 33%;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
    }

`;