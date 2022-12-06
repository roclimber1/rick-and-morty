

import axios from 'axios'


import { TOTAL_CHARACTERS } from '../constants/main'




const URL = {
    CHARACTER: 'https://rickandmortyapi.com/api/character/'
}




export const getCharacter = async (id) => {

    if (!id) {

        return null
    }

    return await axios.get(`${URL.CHARACTER}${id}`)
}



export const getRandomCharacter = async () => {

    const id = Math.floor(Math.random() * TOTAL_CHARACTERS)

    return await getCharacter(id)
}



export const getDataByUrl = async (url) => {

    if (!url) {

        return null
    }

    return await axios.get(url)
}
