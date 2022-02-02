import React from "react";
import styled from "@emotion/styled";

//Components
import ProductCard from "../components/ProductCard";

//STYLED COMPONENTS
//STYLED COMPONENTS
//STYLED COMPONENTS
const MainContainer = styled.div``;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 26px;
  place-content: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`;
//END STYLED COMPONENTS
//END STYLED COMPONENTS
//END STYLED COMPONENTS

const url =
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=162&w=235";
const data = [
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
  { name: "Bike", price: 100 },
];
const Init = () => {
  return (
    <MainContainer>
      <CardsContainer>
        {data.map((product, i) => (
          <ProductCard key={i} url={url} product={product} />
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

export default Init;
