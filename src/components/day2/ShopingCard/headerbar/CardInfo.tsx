import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import CartDropdown from "../CartDropdown";
import styles from "./HeaderBar.module.css";
import { TbShoppingCart } from "react-icons/tb";

export default function CartInfo() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className={styles.cartInfo} ref={ref}>
      <TbShoppingCart size={50} onClick={()=>setOpen(o=>!o)}/>
      <span className={styles.cartCount}>({cart.length})</span>
      {open && <CartDropdown />}
    </div>
  );
}