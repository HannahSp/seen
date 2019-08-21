import React, { Component } from 'react'
import { api, api_key, img_url, backdrop_size, poster_size} from '../config'
import MovieInfo from '../Movie/MovieInfo'

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    screenplay: [],
    story: [],
    loading: false
  }

  componentDidMount() {
    const {movieId} = this.props.match.params
    this.setState({loading: true})
    let endpoint = `${api}/3/movie/${movieId}?api_key=${api_key}&language=en-US`
    this.fetchItems(endpoint)
  }

  fetchItems = (endpoint) => {
    const {movieId} = this.props.match.params

    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      if(result.status_code) {
        this.setState({loading: false})
      } else {
        this.setState({movie: result}, () => {
          let endpoint = `${api}/3/movie/${movieId}/credits?api_key=${api_key}`

          fetch(endpoint)
          .then(result => result.json())
          .then(result => {
            const directors = result.crew.filter(member => member.job === "Director")
            const screenplay = result.crew.filter(member => member.job === "Screenplay")
            const story = result.crew.filter(member => member.job === "Story")
            this.setState({
              actors: result.cast,
              directors: directors,
              screenplay: screenplay,
              story: story,
              loading: false
            })
          })
        })
      }
    })
    .catch(error => console.log("Error", error))
  }

  render() {
    return (
      <div>
        {
          this.state.movie ?
          <React.Fragment>
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
              screenplay={this.state.screenplay}
              story={this.state.story}
              bk={this.state.movie.backdrop_path ? `${img_url}${backdrop_size}${this.state.movie.backdrop_path}` : null}
              poster={this.state.movie.poster_path ? `${img_url}${poster_size}${this.state.movie.poster_path}` : null}
            />
          </React.Fragment>
          : null
        }
      </div>
    )
  }
}

export default Movie
