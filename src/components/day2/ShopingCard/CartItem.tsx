import React from "react";
import { CartItem as CartItemType } from "./contexts/CartContext";
import styles from "./CartDropdown.module.css";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  return (
    <div className={styles.item}>
      <img src={item.urlImage} alt={item.name} className={styles.itemImg} />
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemQty}>SL: {item.quantity}</div>
        <div className={styles.itemPrice}>
          {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
        </div>
      </div>
    </div>
  );
}