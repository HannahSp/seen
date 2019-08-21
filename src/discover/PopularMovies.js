import React, { Component } from 'react'

import { api, api_key, img_url, poster_size } from '../config'
import MovieThumb from '../components/MovieThumb'

class PopularMovies extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const endpoint = `${api}/3/movie/popular?api_key=${api_key}&language=en-US&total_results=10&page=1`
    this.fetchItems(endpoint)
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: result.results
      })
      console.log(this.state.movies)
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="main-content">
        <h2 className="section__heading">Popular movies</h2>
        <div className="inner-content">
        {
          this.state.movies
          .filter(movie=> movie.original_language !== "ja")
          .map(movie => (
            <MovieThumb
              key={movie.id}
              movie={movie}
              clickable={true}
              movieId={movie.id}
              movieName={movie.original_title}
              image={movie.poster_path ? `${img_url}${poster_size}${movie.poster_path}` : null}
            />
          ))
        }
        </div>
      </div>
    )
  }
}

export default PopularMovies
