


import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


import CharacterCard from '../components/CharacterCard'

import Loader from '../components/Loader'
import Button from '../components/Button'

import { ItemWrapper, ListWrapper } from '../components/Wrapper'

import { Layout } from '../components/RoutesLayout'


import useRequestProcessor from '../hooks/useRequestProcessor'


import { getCharactersList } from '../services/api'





const List = () => {

    const navigate = useNavigate()

    const [url, setUrl] = React.useState()

    const { loading, data } = useRequestProcessor({ requestData: getCharactersList, parameters: url })

    const { info, results: characters } = data || {}
    const { next, prev } = info || {}



    const handleNextPage = React.useCallback(() => {

        next && setUrl(next)
    }, [next])


    const handlePrevPage = React.useCallback(() => {

        prev && setUrl(prev)
    }, [prev])



    const charactersBlock = React.useMemo(() => {

        return (characters || []).map((item) => {

            const { id } = item

            return (<CharacterCard
                data={item}
                onClick={() => navigate(`${id}`)}
                key={`character-card-${id}`}
            />)
        })

    }, [characters, navigate])



    return (<React.Fragment>

        {/* <Layout> */}

        <ListWrapper>

            {loading && <Loader />}

            {!loading && <React.Fragment>

                {charactersBlock}

            </React.Fragment>}

        </ListWrapper>


        <ItemWrapper>
            {Boolean(prev) && <Button title={'Prev page'} onClick={handlePrevPage} />}

            {Boolean(next) && <Button title={'Next page'} onClick={handleNextPage} />}
        </ItemWrapper>

        {/* </Layout> */}

    </React.Fragment>)
}




export default List
