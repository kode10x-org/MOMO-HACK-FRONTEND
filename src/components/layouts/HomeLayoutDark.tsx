import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDark from '../Blocks/FirstBlock/HeaderDark'


const HomeLayoutDark = () => {
  return (
    <div>
      <HeaderDark/>
      <Outlet/>
     
    </div>
  )
}

export default HomeLayoutDark