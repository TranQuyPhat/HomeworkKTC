import React from "react";
import { FaBars } from 'react-icons/fa'
export default function CategoryMenuButton() {
  return (
    <button style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: 6,
      background: "#fff",
      padding: "8px 16px",
      fontWeight: 500,
      cursor: "pointer",
      marginRight: 8
    }}>
     <FaBars className="text-gray-600" />
      Danh mục sản phẩm
    </button>
  );
}