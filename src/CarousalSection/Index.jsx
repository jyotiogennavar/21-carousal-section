import React, {useState } from "react";
import styled, { css } from "styled-components";

import { persons } from "./CardData";

const Carousal = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <Header>
        <HeroTitle>Meet Our Speakers</HeroTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </Header>
      <Wrapper>
        <CarousalContainer>
          <PersonList>
            {persons.map((person, index) => {
              return (
                <CarousalItem
                  onClick={() => setActiveItem(index)}
                  aria-current={activeItem === index}
                  key={index}
                >
                  <ImageContainer>
                    <CarousalImage src={person.img} alt={person.name} />

                    <TextWrapper isActive={activeItem === index}>
                      <Title>{person.title}</Title>
                      <Name>{person.name}</Name>
                    </TextWrapper>
                  </ImageContainer>
                </CarousalItem>
              );
            })}
          </PersonList>
        </CarousalContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;


  font-family: "Poppins", sans-serif;
`;

const Header = styled.header`
 font-family: "Poppins", sans-serif;
  padding: 1rem 2rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 1200px;
  max-width: 100%;

  p {
    max-width: 50ch;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CarousalContainer = styled.div`
  width: 1200px;
  max-width: 100%;
`;

const PersonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    height: 500px;
    flex-direction: row;
    gap: 1.5%;
  }
`;


const CarousalItem = styled.li`
  position: relative;
  list-style: none;
  width: 8%;
  transition: width 0.5s ease;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    right: -10px;
    content: "";
  }

  &:first-child,
  &:last-child {
    width: 1%;
    pointer-events: none;
    opacity: 0.8;
  }

  &:hover:not(:first-child):not(:last-child) {
    width: 12%;
    & ~ li:not(:first-child):not(:last-child) {
      width: 7%;
    }
  }

  ${(props) =>
    props["aria-current"] &&
    css`
      width: 40%;
    `}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
`;

const CarousalImage = styled.img`
  position: absolute;
  width: 590px;
  height: 500px;
  object-fit: cover;
  object-position: center;
  filter: blur(0.8);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 590px;
  padding: 2rem;
  transition: transform, opacity 300ms;

  @media (min-width: 768px) {
    position: absolute;
    padding: 0;
    left: 1rem;
    top: 2rem;
    transform: ${({ isActive }) =>
      isActive ? "translateX(0)" : "translateX(4px)"};
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};

    
  }
`;

const Title = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default Carousal;
