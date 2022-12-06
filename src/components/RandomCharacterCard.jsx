


import React from 'react'


import Card from '../components/Card'

import Image from './Image'
import Loader from './Loader'


import { getRandomCharacter } from '../services/api'




const SIZE = {
    WIDTH: 20,
    HEIGHT: 20
}



const RandomCharacterCard = () => {

    const [loading, setLoading] = React.useState(false)
    const [character, setCharacter] = React.useState(null)



    const loadCharacter = async () => {

        setLoading(true)

        try {
            const { data } = await getRandomCharacter()
            setCharacter(data)

        } finally {

            setLoading(false)
        }
    }


    React.useEffect(() => {

        !loading && loadCharacter()

    }, [])



    const { name, image } = character || {}

    const size = React.useMemo(() => {

        return {
            width: SIZE.WIDTH,
            height: SIZE.HEIGHT
        }
    }, [])


    return (<Card>

        {loading && <Loader {...size} />}

        {!loading && <React.Fragment>
            <Image image={image} {...size} />
            {name}
            gender

        </React.Fragment>}
    </Card>)
}




export default RandomCharacterCard
