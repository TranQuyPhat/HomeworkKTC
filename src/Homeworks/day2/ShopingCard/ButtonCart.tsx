import React from 'react'
import style from "./btn.module.css"
type Props = {}

export default function ButtonCart({}: Props) {
  return (
    <button className={style.btncart}>Xem giỏ hàng</button>
  )
}