import React, { useState } from 'react';
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
    border-radius: 4px;
    overflow: hidden;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: inherit;
`;

export const NavSection = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;

  @media (min-width: ${props => props.theme.md}px) {
    padding: 0;
  }
`;

export const NavWrapper = styled.div`
  padding-right: 1rem;
`;

export const NavContainer = styled.div`
  height: 60px;
  cursor: pointer;

  border-radius: 10px;
  overflow: hidden;

  @media (min-width: ${props => props.theme.md}px) {
    height: 80px;
  }
`;

const ImgCarousel = ({ imgs }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  if (!imgs || !imgs.length) return <div />;

  return (
    <Container>
      <Slider
        accessibility={true}
        speed={200}
        asNavFor={nav2}
        ref={slider => setNav1(slider)}
      >
        {imgs.map((src) => (
          <ImgContainer>
            <Img src={src} />
          </ImgContainer>
        ))}
      </Slider>
      <NavSection>
        <Slider
            asNavFor={nav1}
            ref={slider => setNav2(slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
          {imgs.map((src) => (
            <NavWrapper>
              <NavContainer>
                <Img src={src} />
              </NavContainer>
            </NavWrapper>
          ))}
        </Slider>
      </NavSection>
    </Container>
  );
};

class AsNavFor extends React.Component {
  constructor(props) {
    super(props);

    // stores refs of two navs
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


export default ImgCarousel;
