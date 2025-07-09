import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

export default function Lession9({}: Props) {
  return (
    <div>
      <nav>
        <Link to="registerpage" >Bài 1</Link> | 
        <Link to="bai2">Bài 2</Link> | 
        <Link to="bai3">Bài 3</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}