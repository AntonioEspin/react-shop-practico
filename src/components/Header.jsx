import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import '../styles/Header.scss'
import Menu from '../components/Menu'
import MyOrder from '../containers/MyOrder'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCarIcon from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [addMenu, setAddMenu] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false)
  const {state} = useContext(AppContext)

  const handleMenu = () => {
    setAddMenu(!addMenu)
  }
  return (
    <nav>
      <img src={menu} alt="icon_menu" className="menu"/>

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo"/>
        <ul>
          <li><a href="/">All</a></li>
          <li><a href="/">Clothes</a></li>
          <li><a href="/">Electronics</a></li>
          <li><a href="/">Furnitures</a></li>
          <li><a href="/">Toys</a></li>
          <li><a href="/">Others</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick = {handleMenu}>myemail@example.com</li>
          <li className="navbar-shopping-cart" onClick={()=>setToggleOrder(!toggleOrder)}>
            <img src={shoppingCarIcon} alt="icon_shopping_cart"/>
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {addMenu && <Menu/>}
      {toggleOrder && <MyOrder/>}
    </nav>
  );
};

export default Header;