
import React from 'react'


import { ItemWrapper } from '../components/Wrapper'

import CharacterCard from '../components/CharacterCard'

import Button from '../components/Button'


import { getCharacter, getRandomId } from '../services/api'


import useRequestProcessor from '../hooks/useRequestProcessor'




import type { Character } from '../interfaces/main'





const Home = (): JSX.Element => {


    const [id, setId] = React.useState<number>(getRandomId())

    const { loading, data } = useRequestProcessor<Character, number>({ requestData: getCharacter, parameters: id })


    React.useEffect(() => {

        setId(getRandomId())
    }, [])


    const handleClick: React.MouseEventHandler = () => {

        setId(getRandomId())
    }



    return (<React.Fragment>

        <ItemWrapper>

            <CharacterCard
                loading={loading}
                data={data}
                onClick={handleClick}
            />
        </ItemWrapper>


        <ItemWrapper>

            <Button
                title={'Update'}
                onClick={handleClick}
            />
        </ItemWrapper>

    </React.Fragment>)
}




export default Home
