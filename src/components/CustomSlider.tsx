import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Span = styled.span`
    font-size: 3.5rem;
    opacity: 0;
    position: absolute;
    left: 100%;
    bottom: 40%;
    transform:translate(-50%, 0%);
    &:active {
      color: darkgray
    }
`;
const PSpan = styled(Span)`
      left: 0%;
      z-index: 500;
`;
const NextArrow = (props: any) => {
    return (
      <Span><FaRegArrowAltCircleRight className="nextArrow arrow" onClick={props.onClick}/></Span>
    );
  }
const PrevArrow = (props: any) => {
    return (
      <PSpan><FaRegArrowAltCircleLeft className="prevArrow arrow" onClick={props.onClick}/></PSpan>
    );
}
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};
const SliderContainer = styled.div`
  position: relative;
  &:hover {
    ${Span} {
      opacity: 1;
    }
  }
`;

const CustomSlider: React.FunctionComponent = ({children}) => (
    <SliderContainer>
      <Slider {...settings}>
        {children}
      </Slider>
    </SliderContainer>
);
CustomSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default CustomSlider;