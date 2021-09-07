import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

interface IState {
  movieResults: any[] | null,
  tvResults: any[] | null,
  searchTerm: string,
  loading: boolean,
  error: string | null
}
class SearchContainer extends React.Component<IState> {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };
  // 빈칸 방지
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event: any) => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}

export default SearchContainer;
