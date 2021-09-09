import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
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
  infinite: true,
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
  &:hover {
    ${Span} {
      opacity: 1;
    }
  }
  //min-width: 900px;
`;
const Count = styled.span`
  color: red;
  font-size: 1rem;
  margin-left: 1rem;
`;
interface ISectionProps {
  title: string,
  children: any,
  count?: number
}
const Section: React.FunctionComponent<ISectionProps> = ({ title, count, children }) => (
  <Container>
    <Title>{title}<Count>{count && `${count}건`}</Count></Title>
    <SliderContainer>
      <Slider {...settings}>
        {children}
      </Slider>
    </SliderContainer>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Section;
