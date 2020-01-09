import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
      <div className="Nav">
        <div className="topnav">
          <a className="active" href="/home">
            Home
          </a>
          <a href="/missings">Missings</a>
        </div>
      </div>
    );
}

export default Nav