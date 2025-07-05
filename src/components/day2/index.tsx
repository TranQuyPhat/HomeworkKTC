import React, { useState } from "react";
import Button from "./Calculator/Button";
import Calculator from "./Calculator";
import FormValidate from "./Form";
import { CartProvider } from "./ShopingCard/contexts/CartContext";

import ProductGrid from "./ShopingCard/ProductGrid";
import HeaderBar from "./ShopingCard/HeaderBar/HeaderBar";

type Props = {};
export default function Day2({}: Props) {
  return (
    <CartProvider>
      <div >
        <HeaderBar/>
        {/* <header >
          <h1>Giỏ hàng</h1>
          <CartIcon onClick={() => setShowCart(!showCart)} />
        </header>
        {showCart && <CartDropdown />} */}
        <ProductGrid />
      </div>
    </CartProvider>
    // <div>
    //   <Calculator />
    //   <FormValidate />
    // </div>
  );
}
