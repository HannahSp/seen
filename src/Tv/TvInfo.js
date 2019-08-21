import React, { Component } from 'react'
import OverView from './OverView'

class TvInfo extends Component {

  render() {

    let firstAir = this.props.tv.first_air_date.slice(0,4)
    let lastAir = this.props.tv.last_air_date.slice(0,4)

    let headerImg = this.props.bk
    const headerStyle = {
      backgroundImage: `url(${headerImg})`
    }

    return (
      <div className="movie">
        <div className="movie">
          <div className="movie__header" style={headerStyle}></div>
          <div className="movie-info">
            <img className="movie-info__poster" src={this.props.poster} alt={this.props.tv.name}/>
            <div className="movie-info__details">
              <button className="movie-info__add-button"></button>
              <div className="movie-info__details-header">
                <h2>{this.props.tv.name}</h2>
                  {
                    this.props.tv.genres.map(genre => (
                      <span key={genre.name} className="movie-info__genre">{genre.name}</span>
                    ))
                  }

                <span className="movie-info__year">{this.props.tv.next_episode_to_air ? `${firstAir} -` : `${firstAir}-${lastAir}`}</span>
              </div>
              <article className="movie-info__plot">
                <h4>Overview</h4>
                <OverView limit="250" content={this.props.tv.overview}/>
              </article>
              <div className="movie-info__testimonials">
                <div className="testimonial">
                  <p><span>{this.props.tv.number_of_seasons}</span> seasons</p>
                </div>
              </div>
              <div className="movie-info__footer">
                <div className="movie-info__crew">
                  <h5>{this.props.tv.created_by.length > 1 ? 'Creators' : 'Creator'}</h5>
                  {
                    this.props.tv.created_by
                    .map(creator => (
                      <p key={creator.id}>{creator.name}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TvInfo
