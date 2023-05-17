


import React from 'react'
import { useNavigate } from 'react-router-dom'


import CharacterCard from '../components/CharacterCard'


import Button from '../components/Button'

import { ItemWrapper, ListWrapper } from '../components/Wrapper'



import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharactersList } from '../services/api'





import type { NavigateFunction } from 'react-router-dom'
import type { Character } from '../interfaces/main'




interface ResponseData {
    results: Array<Character>,
    info: {
        next: string,
        prev: string
    }
}




const List = () => {

    const navigate: NavigateFunction = useNavigate()

    const [url, setUrl] = React.useState<string>('')

    const { loading, data } = useRequestProcessor<ResponseData, string>({ requestData: getCharactersList, parameters: url })

    const { info, results: characters } = data || {}
    const { next, prev } = info || {}



    const handleNextPage = React.useCallback((): void => {

        next && !loading && setUrl(next)

    }, [next])


    const handlePrevPage = React.useCallback((): void => {

        prev && !loading && setUrl(prev)

    }, [prev])


    const handleCardClick = (id: number): void => {

        navigate(`${id}`)
    }



    const charactersBlock = React.useMemo<Array<JSX.Element>>(() => {

        return (characters || []).map((item: Character) => {

            const { id } = item

            return (<CharacterCard
                data={item}
                onClick={() => handleCardClick(id)}
                key={`character-card-${id}`}
            />)
        })

    }, [characters, navigate])



    return (<React.Fragment>

        <ListWrapper>

            {charactersBlock}

        </ListWrapper>


        <ItemWrapper>

            {prev ? (<Button
                onClick={handlePrevPage}
                title={'Prev page'}
            />) : null}

            {next ? (<Button
                onClick={handleNextPage}
                title={'Next page'}
            />) : null}

        </ItemWrapper>

    </React.Fragment>)
}




export default List
