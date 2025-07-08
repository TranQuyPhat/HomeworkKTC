import React from "react";
import styled from "./InputField.module.css";
type Props = {};

export default function InputField({ label,name, type, value, onChange, error }) {
  return (
    <div className={styled.inputGroup}>
      <label className={styled.label}>{label}</label>
      <input
      name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styled.input} ${error ? styled.inputError : ""}`}
      />
      {error && <p className={styled.errorText}>{error}</p>}
    </div>
  );
}
