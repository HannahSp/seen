import React, { Component } from 'react'

import { api, api_key, img_url, poster_size } from '../config'
import TvThumb from '../components/TvThumb'

class PopularTv extends Component {
  state = {
    tv: []
  }

  componentDidMount() {
    const endpoint = `${api}/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
    this.fetchItems(endpoint)
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        tv: result.results
      })
    })
  }

  render() {
    console.log(this.state.tv)
    return (
      <div className="main-content">
        {
          this.state.tv
          .filter(tv => tv.original_language !== "ja")
          .map(tv => (
            <TvThumb
              key={tv.id}
              tv={tv}
              clickable={true}
              tvName={tv.name}
              tvId={tv.id}
              image={tv.poster_path ? `${img_url}${poster_size}${tv.poster_path}` : null}
            />
          ))
        }
      </div>
    )
  }
}

export default PopularTv
