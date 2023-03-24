
import axios from 'axios'

import { TOTAL_CHARACTERS } from '../constants/main'


import type { UrlsList } from '../constants/main'


const URL: UrlsList = {
    CHARACTER: 'https://rickandmortyapi.com/api/character'
}


/**
 *
 * @param url
 */
export async function getDataByUrl<Data> (url: string): Promise<Data> {

    return await axios.get(url)
}


/**
 *
 * @param id
 */
export async function getCharacter<Data>(id: number): Promise<Data> {

    return await getDataByUrl(`${URL.CHARACTER}/${id}`)
}


/**
 *
 * @param url
 */
export async function getCharactersList<Data>(url: string = URL.CHARACTER): Promise<Data> {

    return await getDataByUrl(url)
}


export const getRandomId = (total: number = TOTAL_CHARACTERS): number => {

    const id: number = Math.floor(Math.random() * total)

    return id
}


/**
 *
 */
export async function getRandomCharacter<Data>(): Promise<Data> {

    const id: number = getRandomId()

    return await getCharacter(id)
}
