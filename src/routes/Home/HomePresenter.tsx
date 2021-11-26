import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section";
import NetflixPoster from "../../components/NetflixPoster";
import Loader from "../../components/Loader";
import Message from "../../components/Message";


const Container = styled.div`
  padding: 20px;
  margin: 0 10% 15% 10%;
`;

interface IHomePresenterProps {
  nowPlaying: any[] | null,
  upcoming: any[] | null,
  popular: any[] | null,
  error: string | null,
  loading: boolean
} 

const HomePresenter: React.FunctionComponent<IHomePresenterProps> = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | FlixNet</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
         {popular && popular.length > 0 && (
          <Section title="요즘 핫한 영화🔥">
            {popular.map(movie => (
              <NetflixPoster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date.substring(0, 4) : "none"}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="개봉 중 영화">
            {nowPlaying.map(movie => (
              <NetflixPoster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="다가올 영화">
            {upcoming.map(movie => (
              <NetflixPoster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}    
        {error && <Message size="1.5rem" color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
