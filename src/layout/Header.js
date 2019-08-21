import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import MenuIcon from '../components/MenuIcon';

class Header extends Component {

  render() {

    return (
      <header className="main-header">
        <MenuIcon openMenu={this.props.openMenu}/>
        <h1>
          <Link to="/">Seen</Link>
        </h1>
        <div className="icon-container search-icon">
          <FiSearch/>
        </div>
      </header>
    )
  }
}

export default Header