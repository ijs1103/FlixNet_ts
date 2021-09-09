import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import NetflixPoster from "../../components/NetflixPoster";

const Container = styled.div`
  padding: 20px;
  margin: 0 10%;
`;
interface ITVPresenterProps {
  topRated: any[] | null, 
  popular: any[] | null, 
  airingToday: any[] | null, 
  loading: boolean, 
  error: string | null
}
const TVPresenter: React.FunctionComponent<ITVPresenterProps> = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | FlixNet</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {popular && popular.length > 0 && (
          <Section title="요즘 핫한 드라마 🔥">
            {popular.map(show => (
              <NetflixPoster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="상영 중 드라마">
            {airingToday.map(show => (
              <NetflixPoster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="평점 높은 드라마">
            {topRated.map(show => (
              <NetflixPoster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
  
        {error && <Message size="1.5rem" color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
