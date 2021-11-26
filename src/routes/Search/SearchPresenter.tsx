import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 20px;
  margin: 0 10% 10% 10%;
`;
const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  margin-bottom: 50px;
  position: relative;
  width: 80%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  color: darkgray;
  border-radius: 30px;
  font-weight: 300;
`;

const SearchLogo = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15%;
  right: 0%;
  background-position: center center;
  background-size: cover;
  &:active{
    opacity: 0.5;
  }
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44ODE5IDUuMzMzMjVDOS4xNjA2IDUuMzMzMjUgNS4zMzMyNSA5LjE2MDYgNS4zMzMyNSAxMy44ODE5QzUuMzMzMjUgMTguNjAzMiA5LjE2MDYgMjIuNDMwNSAxMy44ODE5IDIyLjQzMDVDMTUuNzc2IDIyLjQzMDUgMTcuNTI3MSAyMS44MTQgMTguOTQ0MyAyMC43NzFMMjMuMTI4MSAyNC45NTQ5QzIzLjYzMjYgMjUuNDU5NCAyNC40NTA1IDI1LjQ1OTQgMjQuOTU0OSAyNC45NTQ5QzI1LjQ1OTQgMjQuNDUwNSAyNS40NTk0IDIzLjYzMjYgMjQuOTU0OSAyMy4xMjgxTDIwLjc3MSAxOC45NDQzQzIxLjgxNCAxNy41MjcxIDIyLjQzMDUgMTUuNzc2IDIyLjQzMDUgMTMuODgxOUMyMi40MzA1IDkuMTYwNiAxOC42MDMyIDUuMzMzMjUgMTMuODgxOSA1LjMzMzI1Wk03LjkxNjcxIDEzLjg4MTlDNy45MTY3MSAxMC41ODc0IDEwLjU4NzQgNy45MTY3MSAxMy44ODE5IDcuOTE2NzFDMTcuMTc2NCA3LjkxNjcxIDE5Ljg0NyAxMC41ODc0IDE5Ljg0NyAxMy44ODE5QzE5Ljg0NyAxNS40OTM4IDE5LjIwODIgMTYuOTU1OCAxOC4xNjkgMTguMDI5NkMxOC4xNDQyIDE4LjA1MDkgMTguMTIwMSAxOC4wNzMzIDE4LjA5NjcgMTguMDk2N0MxOC4wNzMzIDE4LjEyMDEgMTguMDUwOSAxOC4xNDQyIDE4LjAyOTYgMTguMTY5QzE2Ljk1NTggMTkuMjA4MiAxNS40OTM4IDE5Ljg0NyAxMy44ODE5IDE5Ljg0N0MxMC41ODc0IDE5Ljg0NyA3LjkxNjcxIDE3LjE3NjQgNy45MTY3MSAxMy44ODE5WiIgZmlsbD0iIzg2OEU5NiIvPgo8L3N2Zz4K);
`;

interface ISearchPresenterProps {
  movieResults: any[] | null,
  tvResults: any[] | null,
  loading: boolean,
  searchTerm?: string,
  searched?: string,
  handleSubmit: (event: React.FormEvent) => void,
  error: string | null,
  updateTerm: (event: any) => void
}
const SearchPresenter: React.FunctionComponent<ISearchPresenterProps> = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  searched,
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
      <FormDiv>
        <Form onSubmit={handleSubmit}>
            <Input
              placeholder="검색어를 입력 해주세요"
              value={searchTerm}
              onChange={updateTerm}
              autoFocus
            />
            <SearchLogo onClick={handleSubmit}/>
        </Form>
      </FormDiv>
      {((tvResults && tvResults.length > 0) ||
          (movieResults &&
          movieResults.length > 0)) && (
            <Message size="2rem" text={`'${searched}'(으)로 검색한 결과`} color="white" />
          )}
        {movieResults && movieResults.length > 0 && (
          <Section count={movieResults.length} title="영화">
            {movieResults.map(movie => (
              <Poster
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
          <Section count={tvResults.length} title="드라마">
            {tvResults.map(show => (
              <Poster
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
        {error && <Message size="1.5rem" color="#e74c3c" text={error} />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message size="1.5rem" text="결과 없음" color="#95a5a6" />
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
  searched: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
