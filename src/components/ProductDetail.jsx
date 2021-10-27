import React from "react";
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close"/>
      </div>
      <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
      <div className="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui necessitatibus laudantium quod, est molestias quam, eligendi vel ex laboriosam accusamus autem ea cum ab deserunt libero assumenda facere nemo!
        </p>
        <button className="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="bt_add_to_cart"/>
          Add to cart
        </button>
      </div>
    </aside>
  )
}

export default ProductDetail