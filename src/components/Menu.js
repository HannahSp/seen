import React, { Component } from 'react'
import MenuItem from './MenuItem'


class Menu extends Component {

  render() {
    return (
      <nav className="main-menu">
        <ul>
          <MenuItem closeMenu={this.props.openMenu} linkTo="/" title="Home"/>
          <MenuItem closeMenu={this.props.openMenu} linkTo="/discover" title="Discover"/>
          <MenuItem closeMenu={this.props.openMenu} linkTo="/profile" title="Profile"/>
        </ul>
      </nav>
    )
  }
}

export default Menu
