import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm ..."
        style={{
          width: "100%",
          padding: "8px 16px",
          border: "1px solid #eee",
          borderRadius: 6,
          fontSize: 16,
          outline: "none"
        }}
      />
      <FaSearch/>
    </div>
  );
}