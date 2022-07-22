import React, { useState } from "react";
import styled from "styled-components";
import { FoodMenuList } from "../items/FoodOptions";

function MenuPage({ maxHeight }) {
    const [foodOptions, setFoodOptions] = useState(FoodMenuList)

    const Product = ({ product }) => {
        return (
            <ProductBox>
                <img src={product.src} alt={product.title} />
                <div className="productText">
                    {product.title}
                </div>
                <div className="options">
                    <div className="wrapper">{product.option1}</div> <br />
                    <div className="wrapper">{product.option2}</div>
                </div>
            </ProductBox>
        );
    };

    return (
        <MarketContainer maxHeight={maxHeight}>
            <div className='banner'>
                <img src='/assets/images/banner.jpeg' alt='' />
            </div>
            <div className="scroll">
                <div className="number">
                    <div className="wrapper"><p>Call for Catering Info</p></div>
                    <div className="wrapper"><p>610-333-2146</p></div>
                </div>
                <div className="hours">
                    <div className="hourwrap"><p>Hours:</p></div>
                    <div className="hourwrap"><p>Monday-Thursday: 9am - 5pm</p></div>
                    <div className="hourwrap"><p>Friday-Sunday: 9am - 8pm</p></div>
                </div>
                <h3>Menu</h3>
                <h4>All platters include 2 sides</h4>
                <h4>Sides: Mac & Cheese, Rice, Cabbage, String Beans, Greens</h4>

                <ProductContainer>
                    {foodOptions.map((product) => {
                        const { id } = product;

                        return <Product key={id} product={product} />;
                    })}
                </ProductContainer>
            </div>
        </MarketContainer>
    );
}

export default MenuPage;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
  width: 50vw;
  flex: 0.8;
  align-self: center;
  @media(pointer: coarse) {
      width: 100%;
  }
`;
const ProductBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
background-color: #fff;
border: 1px solid #fff;
border-radius: 5px;
margin: 1% 1%;
justify-content: center;
color: black;

.options {
display: flex;
flex: .4;
justify-content: flex-end;
font-size: 1em;
font-weight: 500;
align-items: flex-end;
padding: 0 5px;
flex-direction: column;
flex-wrap: wrap;
text-align: center;

@media(pointer: coarse) {
font-size: .7em;
flex: 0.6;
}
}

.productText {
display: flex;
flex: 0.6;
justify-content: center;
flex-direction: column;
font-size: 1.5em;
padding: 0 5px;
flex-wrap: wrap;
align-items: center;
text-align: center;

@media(pointer: coarse) {
font-size: 1em;
}
}

img {
height: 20vh;
width: 10vw;

@media(pointer: coarse) {
width: 30vw;
height: 12vh;
}
}

`;
const MarketContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
color: #fff;
flex: 1;
background-color: black;
height: 100vh;
overflow-y: auto;

.banner {
display: flex;
align-items: center;
justify-content: center;

img {
padding: 1em;
height: 30vh;
width: 50vw;

@media(pointer: coarse) {
height: 20vh;
width: 90vw;
}
}
}

.scroll {
display: flex;
flex-direction: column;
justify-content: space-between;
color: #fff;
flex: 1;
background-color: black;
overflow-y: auto;

.number {
display: flex;
flex-direction: row;
justify-content: center;


.wrapper {
padding: 0 12vw;

p {
  margin: 0;
}

@media(pointer: coarse){
  padding: 0 5vw;
}
}
}

.hours {
display: flex;
flex-direction: column;
padding-left: 3vw;
text-align: center;
padding-bottom: 2vh;

.hourwrap {
p {
  margin: 0;
  font-size: 1em;
}
}
}

h4 {
padding-left: 3vw;
text-align: center;
margin: 0;
font-size: 1.3em;
  @media(pointer: coarse) {
    font-size: .7em;
  }
}

h3 {
  text-align: center;
padding-left: 3vw;
font-size: 2em;
margin: 0;
text-decoration: underline;
 @media(pointer: coarse) {
    font-size: 1em;
 }
}

p {
font-size: 2em;
padding-top: 5px;

@media(pointer: coarse){
font-size: 1em;
}
}

h1 {
display: flex;
flex: 1;
flex-direction: row;
margin-top: 0;
color: orange;
text-shadow: 6px 6px 7px white;
justify-content: center;
padding: 10px;
font-size: 1.5em;
}
}
`;
