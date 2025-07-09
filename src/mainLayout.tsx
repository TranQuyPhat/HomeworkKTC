import React from 'react'
import { Link, Outlet } from 'react-router'

type Props = {}

export default function MainLayout({}: Props) {
  return (
    <div>
      <nav>
        <Link to="registerpage" >Bài 1</Link> | 
        <Link to="dashboard">Bài 2</Link> | 
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}