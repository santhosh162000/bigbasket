import React from 'react'
import styled from "styled-components";
import { Telephone, GeoAlt, ChevronCompactDown, Basket2Fill, Person, Search, TagFill } from 'react-bootstrap-icons';
import logo from "../assets/BigBasketLogo.jpg"

export default function Navbar() {
    return (

            <HeaderContainer>
                <span>
            <HeaderTop>
                <HeaderTopLeft>
                    <span>
                     <Telephone size={20}/> 1860 123 1000
                    </span>
                    <span >
                    <GeoAlt size={20}/>
                    560004, Bangalore
                    <ChevronCompactDown size={20}/>
                    </span>
                    <span >
                    <Person size={20}/>
                    Login | Signup
                    </span>
                </HeaderTopLeft>
            </HeaderTop>
            <HeaderBottom>
                <HeaderBottomImage>
                    <img src={logo}></img>
                </HeaderBottomImage>
                <HeaderBottomSearch>
                    <input type="text" placeholder="Search for Products.." />
                    <span>
                    <Search />
                    </span>
                </HeaderBottomSearch>
                <HeaderBottomCart>
                    <HeaderBottomCartEnd>
                        <Basket2Fill/>
                        <span>
                            My Basket
                                <br />
                            0 Items
                        </span>
                    </HeaderBottomCartEnd>
                </HeaderBottomCart>
                </HeaderBottom>
                <HeaderBottomNav>
                <span>
                        Shop by category
                        <ChevronCompactDown />
                </span>
                <span>
                    <TagFill />
                    offers
                </span>
            </HeaderBottomNav>
            </span>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div` 
    display: flex;
    width: 100%;
    justify-content: center;
    >span{
        width: 80%;
        overflow: hidden;
        display: flex;
    flex-direction: column;
    
    }
`;

const HeaderTop = styled.div`
    position: relative;
    height: 20px;
    display: flex;
    justify-content: flex-end;

`;

const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #6F6F6F;
    font-size: 13px;
    

    >span {
        display: flex;
        align-items: center;
        padding-left: 20px;
        >svg {
            padding-right:5px;
            font-size: 15px;
        }
    }

    >span:nth-child(n):hover{
        cursor: pointer;
        color: #84C225;
        >svg {
            color: #84C225;
        }
`;


const HeaderBottom = styled.div`
    position: relative;
  
    display: flex;
    flex: 1;
    /* position: fixed; */
    justify-content: center;
`;

const HeaderBottomImage = styled.div`
    flex: 0.2;

    > img {
       width: 180px;
       margin-top: auto;
    }
    > img:hover {
    cursor: pointer;
    }
`;

const HeaderBottomSearch = styled.div`
    flex: 0.5;
    border-radius: 7px;
    display: flex;
    padding: 0 30px;
    opacity: 1;
    justify-content: start;
    margin-bottom: 20px;

    > input {
        margin-top: auto;
        background-color: transparent;
        border: 1px solid black;
        text-align: start;
        min-width: 90%;
        height: 30px;
        outline: 0;
        color: white;
        padding: 4px 15px;
    }

    > span {
        margin-top: auto;
        height: 30px;
        width: 30px;
        background-color: #84C225;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-weight: bold;
    }
    >span:nth-child(n):hover{
        cursor: pointer;
    }
    `;

const HeaderBottomCart = styled.div`
        flex: 0.3;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
`;

const HeaderBottomCartEnd = styled.div`
            display: flex;
            height: 60px;
            width: 140px;
            background-color: #F2F2F2;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            > svg {
                color: #DA251D;
                width: 25px;
                height: 25px;
            }
            >span {
                text-align: end;
                font-size: 13px;
                font-weight: bold;
                padding-left: 8px;
            }
            >span:nth-child(n):hover{
                cursor: pointer;
            }
`;

const HeaderBottomNav = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    /* position: fixed; */
  
    justify-content: start;
    border: 1px solid #F2F2F2;

    >span:nth-child(1) {
        text-transform: uppercase;
        font-weight: bold;
        padding: 6px 6px;
        background-color: #84C225;
        color: white;
        display: flex;
        align-items: center;
        >svg {
            margin-left: 30px;
        }
    }

    >span:nth-child(2) {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: 300;
        padding: 6px 6px;
        /* background-color: #84C225; */
        color: black;
        >svg {
            color: #DA251D;
            font-size: 20px;
            margin-top: 3px;
            padding-right: 7px;
        }
    }

    >span:nth-child(n):hover{
        background-color: #84C225;
        color: white;
        cursor: pointer;

        >svg {
            color: white;
        }
    }
`;