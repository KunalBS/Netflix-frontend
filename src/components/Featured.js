import React from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import styled from 'styled-components';

const Featured = () => {
  return (
  <FeaturedContainer>
    <Image src="https://miro.medium.com/max/1200/1*Md2-DCHahwZdI0DMITEvdQ.png" alt="main"/>
    <InfoContainer>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Daredevil_Logo.svg/1280px-Daredevil_Logo.svg.png" alt="logo" />
         <span className='desc'>
            Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.
         </span>
         <ButtonContainer>
            <StyledButton primary>
                <PlayArrow/>
                <span>Play</span>
            </StyledButton>
            <StyledButton>
                <InfoOutlined/>
                <span>Info</span>
            </StyledButton>
         </ButtonContainer>
    </InfoContainer>
  </FeaturedContainer>
  );
};

export default Featured;

const FeaturedContainer = styled.div`
    height: 90vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    img {
        width: 400px;
    }
    .desc {
        margin: 20px 0px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
`
const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background: ${props => props.primary ? "white" : "#0b0b0b"};
    color: ${props => props.primary ? "#0b0b0b" : "white"};
    span {
        margin-left: 5px;
    }
`