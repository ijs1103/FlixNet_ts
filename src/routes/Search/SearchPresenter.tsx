import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import NetflixPoster from "../../components/NetflixPoster";

const Container = styled.div`
  padding: 20px;
  margin: 0 10%;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
interface ISearchPresenterProps {
  movieResults: any[] | null,
  tvResults: any[] | null,
  loading: boolean,
  searchTerm?: string,
  handleSubmit: (event: React.FormEvent) => void,
  error: string | null,
  updateTerm: (event: any) => void
}
const SearchPresenter: React.FunctionComponent<ISearchPresenterProps> = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <>
    <Helmet>
      <title>Search | FlixNet</title>
    </Helmet>
    
    {loading ? (
      <Loader />
    ) : (
      <Container> 
      <Form onSubmit={handleSubmit}>
          <Input
            placeholder="검색..."
            value={searchTerm}
            onChange={updateTerm}
            autoFocus
          />
      </Form>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화">
            {movieResults.map(movie => (
              <NetflixPoster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year= { movie.release_date ? movie.release_date.substring(0, 4) : "none"}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="드라마">
            {tvResults.map(show => (
              <NetflixPoster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={ show.first_air_date ? show.first_air_date.substring(0, 4) : "none"}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="결과 없음" color="#95a5a6" />
          )}
          </Container>
    )}
    </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
