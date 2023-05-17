

import styled, { keyframes } from 'styled-components'


import Box from './Box'



import type { ImageSize } from '../interfaces/main'




const coinFlip = keyframes`
    0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
        transform: rotateY(3600deg);
    }
`


interface LoaderProps extends Partial<ImageSize> {
    size?: number
}



const Loader = styled(Box)<LoaderProps>`

    transform: translateZ(1px);

    &:after {
        content: '';
        width: ${(props: LoaderProps) => props?.size ? `${props.size}em` : '48px'};
        height: ${(props: LoaderProps) => props?.size ? `${props.size}em` : '48px'};
        margin: 8px;
        border-radius: 50%;
        background: #3689f1;
        animation: ${coinFlip} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    margin: 5px;
    padding: 10px;
`


export default Loader
