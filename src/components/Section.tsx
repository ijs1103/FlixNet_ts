import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CustomSlider from "./CustomSlider";

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
    <CustomSlider>
      {children}
    </CustomSlider>
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
