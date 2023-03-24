

import styled, { keyframes } from 'styled-components'


import Box from './Box'




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


const Loader = styled(Box)`

    transform: translateZ(1px);

    &:after {
        content: '';
        width: 48px;
        height: 48px;
        margin: 8px;
        border-radius: 50%;
        background: #3689f1;
        animation: ${coinFlip} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

`


export default Loader
