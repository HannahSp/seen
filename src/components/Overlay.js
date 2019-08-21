import React from 'react'

 const Overlay = (props) => {
   const overlayStyle = {
    visibility: props.openMenu ? 'visible' : 'hidden'
   }
  return (
    <div className="overlay" onClick={props.openMenu} style={overlayStyle}></div>
  )
}

export default Overlay