import Headers from 'components/Headers/Headers'
import Menu from 'components/Menu/Menu'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
    <header>
        <Headers/>
    </header>
    <main>
        <Menu/>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </main>
   </>
  )
}

export default Layout