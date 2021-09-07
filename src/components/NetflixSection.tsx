import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 10px;
    padding: 1rem;
`;
const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

interface ISectionProps {
    title: string,
    children: any
}
const NetflixSection: React.FunctionComponent<ISectionProps> = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Card>
            {children}
        </Card>
    </Container>
);

NetflixSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default NetflixSection;
