


import React from 'react'

import { Outlet } from 'react-router-dom'


import Header from './Header'
import Footer from './Footer'






export const Layout = (props) => {

    const { children } = props


    return <React.Fragment>

        <Header title={'Rick and Morty'} />

        {children}

        <Footer />


    </React.Fragment>
}



const RoutesLayout = props => {


    return <Layout {...props}>

        <Outlet />

    </Layout>
}



export default RoutesLayout
