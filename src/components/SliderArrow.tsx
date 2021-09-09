import React from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import styled from "styled-components";

const Span = styled.span`
    font-size: 3.5rem;
    opacity: 0;
    position: absolute;
    left: 110%;
    bottom: 50%;
    transform:translate(-50%, 0%);
`;
const PSpan = styled(Span)`
      left: -10%;
      z-index: 500;
`;
export const NextArrow: React.FunctionComponent<any> = (props) => {
    return (
      <Span><FaRegArrowAltCircleRight className="nextArrow arrow" onClick={props.onClick}/></Span>
    );
  }
export const PrevArrow: React.FunctionComponent<any> = (props) => {
    
    return (
      <PSpan><FaRegArrowAltCircleLeft className="prevArrow arrow" onClick={props.onClick}/></PSpan>
    );
}