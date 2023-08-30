import React from 'react'; 
import { Banner } from '../Banner/Banner';
import { CardsContainer } from './Cards.styled';
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";

export function Cards(){
  return (
  <CardsContainer>
    <Banner img={card1}><div>Organic Juice</div></Banner>
    <Banner img={card2}><div>Organic Food</div></Banner>
    <Banner img={card3}><div>Nuts Cookis</div></Banner>
  </CardsContainer>
  );
 }