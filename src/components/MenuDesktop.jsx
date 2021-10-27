import React from "react";
import '../styles/MenuDesktop.scss';

const MenuDesktop = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Sing out</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuDesktop;