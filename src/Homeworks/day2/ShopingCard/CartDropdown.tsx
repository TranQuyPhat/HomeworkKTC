import React from "react";
import { useCart } from "./contexts/CartContext";
import CartItem from "./CartItem";
import styles from "./CartDropdown.module.css";
import ButtonCart from "./ButtonCart";

export default function CartDropdown() {
  const { cart } = useCart();
    const total =cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
  if (cart.length === 0)
    return <div className={styles.dropdown}>Giỏ hàng trống</div>;
  console.log(cart);
  
  return (
    <div className={styles.dropdown}>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
        
      ))}
      <p>
        Tổng cộng : {total.toLocaleString('vi-VN')}đ
      </p>
      <ButtonCart/>
    </div>
  );
}