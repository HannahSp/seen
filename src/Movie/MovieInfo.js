import React, { Component } from 'react'


class MovieInfo extends Component {


  render() {
    let releaseYear = this.props.movie.release_date.slice(0,4)

    let headerImg = this.props.bk
    const headerStyle = {
      backgroundImage: `url(${headerImg})`
    }

    const rating = this.props.movie.vote_average
    const newRating = Math.floor(rating * 10)

    const ratingStyling = {
      width: `${newRating}%`
    }


    let textColor
    if(newRating >= 7) {
      textColor = "orange"
    } else if (newRating >= 8) {
      textColor = "yellow"
    } else if (newRating >= 9) {
      textColor = "green"
    } else {
      textColor = "gray"
    }

    const ratingColor = {
      color: textColor
    }

    return (
      <div className="movie">
        <div className="movie__header" style={headerStyle}></div>
        <div className="movie-info">
          <img className="movie-info__poster" src={this.props.poster} alt={this.props.movie.title}/>
          <div className="movie-info__details">
            <button className="movie-info__add-button"></button>
            <div className="movie-info__details-header">
              <h2>{this.props.movie.title}</h2>
              <span>{releaseYear}</span>
            </div>
            <article className="movie-info__plot">
              <h4>Overview</h4>
              <p>{this.props.movie.overview}</p>
            </article>
            <div className="movie-info__footer">
              <div className="movie-info__crew">
                <h5>{this.props.directors.length > 1 ? "Directos" : "Director"}</h5>
                {
                  this.props.directors.map((director, i) => (
                    <p key={i}>{director.name}</p>
                  ))
                }
              </div>
              {
                this.props.screenplay.length === 0
                ? null
                :
                <div className="movie-info__crew">
                <h5>Screenplay</h5>
                {
                  this.props.screenplay.map((screenplay, i) => (
                    <p key={i}>{screenplay.name}</p>
                  ))
                }
              </div>
              }

              {
                this.props.story.length === 0
                ? null
                :
                <div className="movie-info__crew">
                  <h5>Story</h5>
                  {
                    this.props.story.map((story, i) => (
                      <p key={i}>{story.name}</p>
                    ))
                  }
                </div>
              }

              <div className="movie-info__rating">
                <span style={ratingColor}>{this.props.movie.vote_average}</span>
                <div className="rating-bar">
                  <div className="rating-bar__inner" style={ratingStyling}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieInfo
