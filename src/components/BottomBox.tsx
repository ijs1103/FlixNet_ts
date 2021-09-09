import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 0 5%;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubTitle = styled.span`
  display: block;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
`;
interface IBottomBoxProps{
    title: string, rating?: number, year?: string
}
const BottomBox: React.FunctionComponent<IBottomBoxProps> = ({ title, rating, year }) => (
            <Container>             
                <>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</>
                <SubContainer>
                    <SubTitle>{year && year.substring(0, 4)}</SubTitle>
                    <SubTitle>
                        <span role="img" aria-label="rating">
                            ⭐️
                        </span>{" "}
                        {rating}
                    </SubTitle>
                </SubContainer>
            </Container>
);

BottomBox.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
};

export default BottomBox;