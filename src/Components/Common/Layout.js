import React from 'react'
import { Outlet } from 'react-router'

import NavigationBar from './NavigationBar'

const Layout = () => {
  return (
    <>
        <NavigationBar/>
        <div className='container-body'>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout