import React, { Component } from 'react'

class OverView extends Component {

  state = {
    wholePlot: false
  }

  viewMore = () => {
    this.setState({wholePlot: true})
  }

  viewLess = () => {
    this.setState({wholePlot: false})
  }

  render() {
    const {content, limit} = this.props
    const {wholePlot} = this.state

    if(content.length<= limit) {
      return <p>{content}</p>
    }

    if(wholePlot) {
      return (
        <React.Fragment>
          <p onClick={this.viewLess}>{content}</p>
        </React.Fragment>
      )
    }

    const toShow = content.substring(0,limit)+"..."
    return (
      <React.Fragment>
        <p onClick={this.viewMore}>{toShow}</p>
      </React.Fragment>
    )
  }
}

export default OverView
