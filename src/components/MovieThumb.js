import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MovieThumb extends Component {

  render() {
    let img = this.props.image
    const imageStyle = {
      backgroundImage: `url(${img})`
    }
    
    return (
      <div className="moviethumb">
        {
          this.props.clickable ?
          <Link to={{pathname: `${this.props.movieId}`, movieName: `${this.props.movieName}`}}>
            <div className="moviethumb__img" style={imageStyle}></div>
          </Link>
          : <div className="moviethumb__img" style={imageStyle}></div>
        }

      </div>
    )
  }
}

export default MovieThumb
