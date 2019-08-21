import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class TvThumb extends Component {

  render() {

    let img = this.props.image
    const imageStyle = {
      backgroundImage: `url(${img})`
    }

    return (
      <div className="moviethumb">
        {
          this.props.clickable ?
          <Link to={{pathname: `${this.props.tvId}`, movieName: `${this.props.tvName}`}}>
            <div className="moviethumb__img" style={imageStyle}></div>
          </Link>
          : <div className="moviethumb__img" style={imageStyle}></div>
        }
      </div>
    )
  }
}

export default TvThumb
