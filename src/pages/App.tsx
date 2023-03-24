


import React from 'react'

import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import Details from './Details'


import Home from './RandomCharacter'
import List from './List'


import { URLS_LIST } from '../constants/main'


import RoutesLayout from '../components/RoutesLayout'




const App = (): JSX.Element => {


    return <Router>

        <Routes>

            <Route element={<RoutesLayout />}>

                <Route path={URLS_LIST.HOME} element={<Home />} />

                <Route path={URLS_LIST.LIST} element={<List />} />

                <Route path={`${URLS_LIST.LIST}/${URLS_LIST.DETAILS}`} element={<Details />} />

                <Route element={<Home />} />

            </Route>

        </Routes>

    </Router>
}



export default App
