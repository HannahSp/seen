import React, { Component } from 'react'
import PopularMovies from '../discover/PopularMovies'
import PopularTv from '../discover/PopularTv';

class Discover extends Component {
  state = {
    moviesVisible: true,
    tvVisible: false
  }

  showTv = () => {
    this.setState({
      tvVisible: true,
      moviesVisible: false
    })
  }

  showMovies = () => {
    this.setState({
      tvVisible: false,
      moviesVisible: true
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showMovies}>Movies</button>
        <button onClick={this.showTv}>Tv</button>
        {/* {
          this.state.moviesVisible
          ? <PopularMovies />
          : <PopularTv />
        } */}
        <PopularTv />
      </div>
    )
  }
}

export default Discover
