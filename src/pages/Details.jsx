


import React from 'react'

import { useParams } from 'react-router-dom'


import { ItemWrapper } from '../components/Wrapper'


import CharacterCard from '../components/CharacterCard'

import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharacter } from '../services/api'
import { Layout } from '../components/RoutesLayout'




const Details = (props) => {

    const { id } = useParams()
    // const { id = 1 } = props

    const data = useRequestProcessor({ requestData: getCharacter, parameters: id })



    return (<React.Fragment>

        {/* <Layout> */}

        <ItemWrapper>

            <CharacterCard {...data} />

        </ItemWrapper>

        {/* </Layout> */}

    </React.Fragment>)
}




export default Details
