import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = "khLWBu8D9NRoE0thrsv2yJM3Co1e6iEB";
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((reviewData) => this.setState({ reviews: reviewData.results }))
      .catch((error) => console.log(error));
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
