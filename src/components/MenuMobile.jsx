import React from "react";
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li><a href="/">CATEGORIES</a></li>
        <li><a href="/">All</a></li>
        <li><a href="/">Electronics</a></li>
        <li><a href="/">Furnitures</a></li>
        <li><a href="/">Toys</a></li>
        <li><a href="/">Others</a></li>
      </ul>

      <div>
        <ul>
          <li><a href="/">My orders</a></li>
          <li><a href="/">My account</a></li>
        </ul>
    
        <ul className="info-user">
          <li><a href="/" className="email">platzi@example.com</a></li>
          <li><a href="/" className="sing-out">Sing out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuMobile;