import React, { Component } from 'react'
import { api, api_key, img_url, backdrop_size, poster_size} from '../config'
import TvInfo from '../Tv/TvInfo'

class Tv extends Component {
  state = {
    tv: null,
    actors: null,
    loading: false
  }

  componentDidMount() {
    const {tvId} = this.props.match.params
    this.setState({loading: true})
    let endpoint = `${api}/3/tv/${tvId}?api_key=${api_key}&language=en-US`
    this.fetchItems(endpoint)
  }

  fetchItems = (endpoint) => {
    // const {tvId} = this.props.match.params

    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      if(result.status_code) {
        this.setState({loading: false})
      } else {
        this.setState({tv: result})
      }
    })
    .catch(error => console.log("Error", error))
  }

  render() {
    console.log(this.state.tv)
    return (
      <div>
        {
          this.state.tv ?
          <React.Fragment>
            <TvInfo
              tv={this.state.tv}
              directors={this.state.directors}
              screenplay={this.state.screenplay}
              story={this.state.story}
              bk={this.state.tv.backdrop_path ? `${img_url}${backdrop_size}${this.state.tv.backdrop_path}` : null}
              poster={this.state.tv.poster_path ? `${img_url}${poster_size}${this.state.tv.poster_path}` : null}
            />
          </React.Fragment>
          : null
        }
      </div>
    )
  }
}

export default Tv
