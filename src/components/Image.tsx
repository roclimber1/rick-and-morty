

import styled from 'styled-components'

import Box from './Box'


interface ImageProps {
    image?: string
}



const Image = styled(Box)`

    background-image: ${(props: ImageProps) => props?.image ? `url(${props.image})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 5px;

    margin: 5px;
    padding: 10px;
`


export default Image
