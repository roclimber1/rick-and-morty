


import React from 'react'

import { Outlet } from 'react-router-dom'


import Header from './Header'
import Footer from './Footer'




interface LayoutProps {
    children?: React.ReactNode
}



export const Layout: React.FC<LayoutProps> = (props) => {

    const { children } = props


    return <React.Fragment>

        <Header title={'Rick and Morty'} />

        {children}

        <Footer />


    </React.Fragment>
}



const RoutesLayout: React.FC<LayoutProps> = (props) => {


    return <Layout {...props}>

        <Outlet />

    </Layout>
}



export default RoutesLayout
