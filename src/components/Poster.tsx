import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomBox from "./BottomBox";

const Image = styled.div<{bgUrl: string}>`
  background-image: url(${props => props.bgUrl});
  min-height: 120px;
  width: 100%;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  aspect-ratio: auto 2 / 3;
  transition: opacity 0.1s linear;
`;

const Detail = styled.span`
  top: 50%;
  left: 50%;
  width: 80%;
  position: absolute;
  transform:translate(-50%, -50%);
  font-size: 1.2rem;
  padding: 10px 10px;
  text-align: center;
  opacity: 0;
  color: white;
  border: white 2px solid;
  border-radius: 10px;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Detail} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  font-size: 1.2rem;
  margin: 0 2.5%;
  &:hover {
      color: red;
  }
`;

interface IPosterProps{
  id: number, imageUrl?: string, title: string, rating?: number, year?: string, isMovie: boolean
}

const Poster: React.FunctionComponent<IPosterProps> = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <Detail>
          상세정보
        </Detail>
      </ImageContainer>
      <BottomBox title={title} rating={rating} year={year} />
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired
};

export default Poster;
