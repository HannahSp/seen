import React from 'react'

const MenuIcon = (props) => {
  return (
    <button className="icon-container menu-icon" onClick={props.openMenu}>
      <span className="menu-icon__bar"></span>
      <span className="menu-icon__bar"></span>
      <span className="menu-icon__bar"></span>
    </button>
  )
}

export default MenuIcon