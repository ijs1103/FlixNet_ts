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

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;
const Span = styled.span`
    font-size: 3.5rem;
    opacity: 0;
    position: absolute;
    left: 110%;
    bottom: 50%;
    transform:translate(-50%, 0%);
`;
const NextArrow = (props: any) => {
  return (
    <Span><FaRegArrowAltCircleRight className="nextArrow arrow" onClick={props.onClick}/></Span>
  );
}
const PrevArrow = (props: any) => {
  const PSpan = styled(Span)`
    left: -10%;
    z-index: 500;
`;
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
};
const SliderContainer = styled.div`
  margin-top: 2rem;
  &:hover {
    ${Span} {
      opacity: 1;
    }
  }
`;

interface ISectionProps {
  title: string,
  children: any
}
const Section: React.FunctionComponent<ISectionProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <SliderContainer>
      <Slider {...settings}>
        {children}
      </Slider>
    </SliderContainer>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Section;
