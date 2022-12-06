

import axios from 'axios'


import { TOTAL_CHARACTERS } from '../constants/main'




const URL = {
    CHARACTER: 'https://rickandmortyapi.com/api/character'
}



export const getDataByUrl = async (url) => {

    if (!url) {

        return null
    }

    return await axios.get(url)
}


export const getCharacter = async (id) => {

    if (!id) {

        return null
    }

    return await getDataByUrl(`${URL.CHARACTER}/${id}`)
}


export const getCharactersList = async (url = URL.CHARACTER) => {

    return await getDataByUrl(url)
}


export const getRandomId = (total = TOTAL_CHARACTERS) => {

    const id = Math.floor(Math.random() * total)

    return id
}


export const getRandomCharacter = async () => {

    const id = getRandomId()

    return await getCharacter(id)
}
