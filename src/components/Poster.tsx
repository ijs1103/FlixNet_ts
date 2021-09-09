import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noPoster from "../assets/noPosterSmall.png"

const Image = styled.div<{bgUrl: string}>`
  background-image: url(${props => props.bgUrl});
  height: 300px;
  aspect-ratio: auto 2 / 3;
  background-size: cover;
  border-radius: 4px 4px 0 0;
  background-position: center;
  transition: opacity 0.1s linear;
`;

const Detail = styled.span`
  top: 50%;
  left: 50%;
  width: 50%;
  position: absolute;
  transform:translate(-50%, -50%);
  font-size: 1rem;
  padding: 10px 10px;
  text-align: center;
  opacity: 0;
  color: white;
  border: white 2px solid;
  border-radius: 10px;
  transition: opacity 0.1s linear;
  &:active {
    color: darkgray;
    border-color: darkgray;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 10px;
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
              : noPoster
          }
        />
          <Detail>
            상세정보
          </Detail>
      </ImageContainer>
      <>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</>
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
