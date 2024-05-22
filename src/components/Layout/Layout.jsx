import Headers from 'components/Headers/Headers'
import Menu from 'components/Menu/Menu'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import css from "./Layot.module.css"

const Layout = () => {
  return (
   <>
    <header>
        <Headers/>
    </header>
    <main>
        <div className={css.container_main}>
        <Menu/>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </div>
    </main>
   </>
  )
}

export default Layout