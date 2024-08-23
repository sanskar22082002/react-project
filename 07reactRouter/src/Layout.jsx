import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout

//How we dynamically pass Home,About etc in b/w the Header and Footer => for this we have Outlet from react router dom,Outlet do use this layout as base(header and footer will same) Where give Outlet=> we can change there => for this we have to give information to index file