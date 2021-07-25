import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = "khLWBu8D9NRoE0thrsv2yJM3Co1e6iEB";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here



export class SearchableMovieReviewsContainer extends Component {
  state={
    reviews: [],
    searchTerm: ''
  }
  handleSearchInputChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(data => this.setState({reviews: data.results}))
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === "object" &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}//{" "}
//{" "}
//{" "}

export default SearchableMovieReviewsContainer

