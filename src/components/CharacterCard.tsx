


import React from 'react'


import Card from './Card'

import Image from './Image'
import Loader from './Loader'


import InfoBlock from './InfoBlock'




import type { Character, ImageSize } from '../interfaces/main'





const SIZE: ImageSize = {
    width: 17,
    height: 17
}


interface CharacterCardProps {
    loading?: boolean,
    data: Partial<Character> | null,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}



const CharacterCard: React.FC<CharacterCardProps> = (props) => {

    const { loading = false, data: character, onClick } = props
    const { name, image, status, gender, species, type } = character || {}



    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {

        onClick && onClick(event)
    }


    return (<Card onClick={handleClick}>

        {loading ? (<Loader id={'test-loader'} {...SIZE} />) : null}

        {!loading ? (<React.Fragment>
            <Image image={image} {...SIZE} />

        </React.Fragment>) : null}


        <InfoBlock value={name} fontSize={18} />

        <InfoBlock field={'gender'} value={gender} />

        <InfoBlock field={'species'} value={species} />

        <InfoBlock field={'status'} value={status} />

        <InfoBlock field={'type'} value={type || '-'} />

    </Card>)
}




export default CharacterCard
