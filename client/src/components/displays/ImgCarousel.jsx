import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
  overflow: hidden;
  object-fit: cover;
  height: 250px;
  
  & > img {
    object-fit: cover;
  }
  
  @media (min-width: ${props => props.theme.md}px) {
    height: 500px;
  }
`;

const ImgCarousel = ({ imgs }) => {
  if (!imgs || !imgs.length) return <div />;
  return (
    <Container>
      <Carousel
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        
      >
        {imgs.map((src) => (
          <div>
            <img src={src} />
          </div>
        ))}
      </Carousel>
    </Container>
  )
};

export default ImgCarousel;
