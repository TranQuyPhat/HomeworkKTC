// components/ProductGrid.tsx
import React from 'react';
import styles from './ProductGrid.module.css';
import { products } from './data/product';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
