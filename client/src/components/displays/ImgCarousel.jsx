import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImgCarousel.scss';

const Container = styled.div`
`;

const ImgContainer = styled.div`
  height: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  @media (min-width: ${(props) => props.theme.md}px) {
    height: 500px;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: inherit;
`;

const ImgCarousel = ({ imgs }) => {
  if (!imgs || !imgs.length) return <div />;

  const config = {
    dots: true,
    accessibility: true,
    speed: 200,
  };

  return (
    <Container>
      <Slider {...config}>
        {imgs.map((src) => (
          <ImgContainer>
            <Img src={src} />
          </ImgContainer>
        ))}
      </Slider>
    </Container>
  );
};

export default ImgCarousel;
