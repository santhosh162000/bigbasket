import React from 'react'
import styled from "styled-components";
import Carosal from "./Carosal";
import './SecondSlide.css';
import ImageOne from "../assets/SecondCarosal/2.png"

export default function FirstSlider() {
    let ImageArr = [ImageOne];
    return (
        <SecondSlideContainer>
            <span>
            <div class="container">
            <Carosal ImageArr={ImageArr} />
            <div class="centered"><p className="the">The</p><p className="hol">Holi Special</p><h6 className="ho">Home & Kitchen Sale</h6></div>
            </div>
            </span>
        </SecondSlideContainer>
    )
}

const SecondSlideContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    > span {
        width: 80%;
    }
`;