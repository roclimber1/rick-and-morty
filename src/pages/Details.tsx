
import React from 'react'

import { useParams } from 'react-router-dom'


import { ItemWrapper } from '../components/Wrapper'


import CharacterCard from '../components/CharacterCard'

import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharacter } from '../services/api'




import type { Character } from '../interfaces/main'





const Details = (): JSX.Element => {

    const { id } = useParams()

    const data = useRequestProcessor<Character, number>({ requestData: getCharacter, parameters: Number(id ?? '1') })



    return (<React.Fragment>

        <ItemWrapper>

            <CharacterCard {...data} />

        </ItemWrapper>

    </React.Fragment>)
}




export default Details
