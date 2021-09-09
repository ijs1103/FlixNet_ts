import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomBox from "./BottomBox";
import noPoster from "../assets/noPosterSmall.png";
const Detail = styled.div`
  top: 85%;
  left: 0%;
  position: absolute;
  opacity: 0;
  background-color: #050303;
  transition: transform 0.6s;
  width: 100%;
  height: 30%;
  font-size: 1.3rem;
  border-radius: 0 0 7px 7px;
  padding: 0 10%;
`;

const Image = styled.div<{bgUrl: string}>`
    position: relative;
    flex: 1 1 0px;
    transition: transform 0.6s;
    transform: scale(1);
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center center;
    min-height: 180px;
    border-radius: 7px;
    aspect-ratio: auto 2 / 3;
`;


const ImageContainer = styled.div`
  position: relative;
  margin-right: 10px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
  &:focus, &:hover {
    ${Image}{
        transform: scale(1.3);
        z-index: 11;
    }
    ${Detail}{
        transform: scale(1.3);
        opacity: 1;
        z-index: 12;
    }  
  }
`;


interface INetflixPosterProps{
    id: number, imageUrl?: string, title: string, rating?: number, year?: string, isMovie: boolean
}

const NetflixPoster: React.FunctionComponent<INetflixPosterProps> = ({ id, imageUrl, title, rating, year, isMovie=false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <ImageContainer>
            <Image bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : noPoster
            } />
            <Detail>
                <BottomBox title={title} rating={rating} year={year} />
            </Detail>
        </ImageContainer>
    </Link>

);

NetflixPoster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool.isRequired
};

export default NetflixPoster;