import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from "./ItemCard";
import ImageOne from "../assets/products/1.webp"
import ImageTwo from "../assets/products/2.webp"
import ImageThree from "../assets/products/3.webp"
import ImageFour from "../assets/products/4.webp"
import ImageFive from "../assets/products/5.webp"
import ImageSix from "../assets/products/6.webp"
import ImageSeven from "../assets/products/7.webp"
import ImageEight from "../assets/products/8.webp"
import ImageNine from "../assets/products/9.webp"
import ImageTen from "../assets/products/10.webp"
import ImageEleven from "../assets/products/11.webp"
import ImageTwelve from "../assets/products/12.webp"
import ImageThirteen from "../assets/products/13.webp"
import ImageFourteen from "../assets/products/14.webp"
import ImageFifteen from "../assets/products/15.webp"
import ImageSixteen from "../assets/products/16.webp"
import ImageSeventeen from "../assets/products/17.webp"
import ImageEighteen from "../assets/products/18.webp"
import ImageNineteen from "../assets/products/19.webp"
import ImageTwenty from "../assets/products/20.webp"
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";


function Carosal() {
    const [index, setIndex] = useState(0);
    let ItemArr = [{name: "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, Growth Hormone-Free", image: ImageOne, str: "Rs.210", rate: "Rs 181", type: "Fresho", off: "GET 14% OFF"},
                   {name: "Onion", image: ImageTwo, str: "Rs.31.25", rate: "Rs 25", type: "Fresho", off: "GET 20% OFF"},
                   {name: "Banganapalli Mango", image: ImageThree, str: "Rs.136.25", rate: "Rs 109", type: "Fresho", off: "GET 20% OFF"},
                   {name: "Sugar/Sakkare", image: ImageFour, str: "Rs.275", rate: "Rs 200", type: "bb Popular", off: "GET 27% OFF"},
                   {name: "Potato", image: ImageFive, str: "Rs.26.25", rate: "Rs 19.80", type: "Fresho", off: "GET 25% OFF"},]
    let ItemArrOne = [{name: "2-Minute Instant Noodles - Masala", image: ImageSix, str: "Rs.91", rate: "Rs 70.29", type: "MAGGI", off: "GET 23% OFF"},
                    {name: "Olive Oil - Extra Light", image: ImageSeven, str: "Rs.2600", rate: "Rs 1099.80", type: "BORGES", off: "GET 58% OFF"},
                    {name: "Atta/Godihittu - Whole Wheat", image: ImageEight, str: "Rs.270", rate: "Rs 254", type: "Aashirvaad", off: "SAVE Rs 16"},
                    {name: "Dishwash Liquid Gel - Lemon", image: ImageNine, str: "Rs.155", rate: "Rs 138", type: "Vim", off: "GET 11% OFF"},
                    {name: "Dishwash Liquid - Gel Lemon", image: ImageTen, str: "Rs.105", rate: "Rs 98.01", type: "Vim", off: "SAVE Rs 7"},]
    let ItemArrTwo = [{ name: "Durum Wheat Pasta - Penne Rigate", image: ImageEleven, str: "Rs.250", rate: "Rs 129", type: "BORGES", off: "GET 48% OFF"},
                    {name: "Cumin/Jeera/Jeerige - Whole", image: ImageTwelve, str: "Rs.50", rate: "Rs 29", type: "bb Royal", off: "GET 42% OFF"},
                    {name: "Tea - Natural Care", image: ImageThirteen, str: "Rs.610", rate: "Rs 548", type: "Red Label", off: "GET 10% OFF"},
                    { name: "Carbon Zinc Battery Red HD AA 1015", image: ImageFourteen, str: "Rs.150", rate: "Rs 135", type: "Eveready", off: "SAVE Rs 15"},
                    { name: "Extra Virgin Olive Oil", image: ImageFifteen, str: "Rs.1400", rate: "Rs 697", type: "BORGES", off: "GET 50% OFF"},]
    let ItemArrThree = [{ name: "Sona Masoori Raw Rice/Akki", image: ImageSixteen, str: "Rs.1750", rate: "Rs 1199", type: "bb Royal", off: "GET 31% OFF"},
                    {name: "Tea", image: ImageSeventeen, str: "Rs.140", rate: "Rs 127.25", type: "Red Label", off: "SAVE Rs 13"},
                    {name: "Disinfectant Surface & Floor Cleaner Liquid - Citrus, Kills 99.9% Germs", image: ImageEighteen, str: "Rs.93", rate: "Rs 81.18", type: "Lizol", off: "GET 13% OFF"},
                    { name: "Farm Eggs - Regular, Medium, Antibiotic Residue-Free, Growth Hormone-Free", image: ImageNineteen, str: "Rs.50", rate: "Rs 38", type: "Fresho", off: "GET 24% OFF"},
                    { name: "Hazelnut Spread With Cocoa", image: ImageTwenty, str: "Rs.760", rate: "Rs 723", type: "Nutella", off: "SAVE Rs 46"},]
    
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    const handleRightClick = (i) => {
        if (index < 3) {
            setIndex(index + 1);
        } else if (index == 3) {
            setIndex(0);
        }
    }

    const handleLeftClick = (i) => {
        if (index > 0) {
            setIndex(index - 1);
        } else if (index == 0) {
            setIndex(3);
        }
    }
    
    useEffect(() => {
        console.log({index});
        for (let i = 0; i < document.getElementsByClassName("carousel-indicators").length; i++) {
            document.getElementsByClassName("carousel-indicators")[i].style.display = "none"
        }
    });

    let ItemStyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 8px"
    }
    return (
        <CarosalContainer>
            <span>
                <span className="LeftArrow" onClick={handleLeftClick}>
                    <ChevronCompactLeft />
                 </span>
                <span className="RightArrow" onClick={handleRightClick}>
                    <ChevronCompactRight />
                </span>
            <Carousel controls={false} onSelect={handleSelect} interval={2000} activeIndex={index}>
                     <Carousel.Item>
                        <span style={ItemStyle}>
                    {ItemArr.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} str={item.str} rate={item.rate} type={item.type} off={item.off} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>
                        <Carousel.Item >
                        <span style={ItemStyle}>
                    {ItemArrOne.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} str={item.str} rate={item.rate} type={item.type} off={item.off} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>
                <Carousel.Item >
                    <span style={ItemStyle}>
                    {ItemArrTwo.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} str={item.str} rate={item.rate} type={item.type} off={item.off} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>
                <Carousel.Item >
                    <span style={ItemStyle}>
                    {ItemArrThree.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} str={item.str} rate={item.rate} type={item.type} off={item.off} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>  
                </Carousel>
                </span>
        </CarosalContainer>
    )
}

export default Carosal;

const CarosalContainer = styled.div`
    display: block;
    position: relative;
    >span{
        >.LeftArrow{
            cursor: pointer;
            border: 1px solid #E6E6E6;
            position: absolute;
            z-index: 9;
            background-color: White;
            height: 35px;
            width: 25px;
            top: 45%;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        >.RightArrow {cursor: pointer;
            border: 1px solid #E6E6E6;
            position: absolute;
            z-index: 8;
            background-color: white;
            height: 35px;
            width: 25px;
            right: -0;
            top: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;