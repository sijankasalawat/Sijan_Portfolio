import React from 'react'

const NavBar = () => {
  return (
    <div>
      <header className="d-flex justify-content-between px-2 py-2">
      <div>
        <div className="header "></div>
        <h2>SIJAN.K</h2>
      </div>
      <div className="nav">
        <ul className="navBar d-flex">
         <a href="/" className="px-2">Home</a>
          <a href="/about"  className="px-2">About</a>
         <a href="/contact"  className="px-2" >Contact</a>
          <a href="/explore"  className="px-2">Explore</a>
        </ul>
      </div>
    </header>
    </div>
  )
}

export default NavBar
