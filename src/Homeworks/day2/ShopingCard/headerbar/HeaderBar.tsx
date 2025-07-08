import React from "react";
import styles from "./HeaderBar.module.css";
import LogoBigMarket from "./LogoBigMarket";
import CategoryMenuButton from "./CategoryMenuButton";
import SearchBar from "./SearchBar";
import CartInfo from "./CardInfo";

export default function HeaderBar() {
  return (
    <header className={styles.header}>
      <LogoBigMarket />
      <CategoryMenuButton />
      <SearchBar />
      <CartInfo />
    </header>
  );
}