import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MenuItem extends Component {
  render() {
    return (
      <li onClick={this.props.closeMenu}>
        <Link to={this.props.linkTo}>{this.props.title}</Link>
      </li>
    )
  }
}

export default MenuItem
