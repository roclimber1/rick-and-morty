


import React from 'react'


import { ItemWrapper } from '../components/Wrapper'

import CharacterCard from '../components/CharacterCard'
import { Layout } from '../components/RoutesLayout'

import Button from '../components/Button'


import { getCharacter, getRandomId } from '../services/api'


import useRequestProcessor from '../hooks/useRequestProcessor'




const Home = () => {


    const [id, setId] = React.useState(getRandomId())

    const data = useRequestProcessor({ requestData: getCharacter, parameters: id })


    React.useEffect(() => {

        setId(getRandomId())
    }, [])


    const handleClick = () => {

        setId(getRandomId())
    }


    return (<React.Fragment>

        {/* <Layout> */}

        <ItemWrapper>

            <CharacterCard {...data} />

        </ItemWrapper>


        <ItemWrapper>

            <Button title={'Update'} onClick={handleClick} />

        </ItemWrapper>

        {/* </Layout> */}

    </React.Fragment>)
}




export default Home
