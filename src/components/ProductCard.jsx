import React from "react";
import styled from "@emotion/styled";
import cart from "../assets/icons/bt_add_to_cart.svg";

const Card = styled.div`
  width: 240px;

  @media (max-width: 640px) {
    width: 160px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  p:nth-of-type(n) {
    font-weight: bold;
    font-size: var(--md);
    margin-top: 0px;
    margin-bottom: 4px;
  }

  p:nth-of-type(2n) {
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 0;
    color: var(--very-light-pink);
  }

  figure {
    margin: 0;
  }
`;
const ProductImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 160px;
    height: 160px;
  }
`;

const ProductCard = ({ url, product }) => {
  const { name, price } = product;

  return (
    <Card>
      <ProductImg src={url} />
      <InfoContainer>
        <div>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <figure>
          <img src={cart} alt="Add to cart" />
        </figure>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;
