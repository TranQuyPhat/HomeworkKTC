import React from "react";
import styles from "./ProductCard.module.css";
import { Product } from "./type/Product";
import { useCart } from "./contexts/CartContext";

type Props = {
  product: Product;
};

const formatPrice = (price: number) => price.toLocaleString("vi-VN") + "đ";

export default function ProductCard({ product }: Props) {
  const { cart, dispatch } = useCart();

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const addToCart = () => {
    console.log("ADD_ITEM:", { ...product, quantity: 1 });
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  const increase = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id: product.id } });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id: product.id } });
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.urlImage} alt={product.name} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <div className={styles.controls}>
        <button
          className={styles.btn}
          onClick={decrease}
          disabled={quantity === 0}
        >
          <span className="material-icons">-</span>
        </button>
        <span>{quantity}</span>
        <button
          className={styles.btn}
          onClick={quantity === 0 ? addToCart : increase}
        >
          <span className="material-icons">+</span>
        </button>
      </div>
    </div>
  );
}
