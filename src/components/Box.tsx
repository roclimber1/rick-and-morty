

import styled from 'styled-components'


import type { ImageSize } from '../interfaces/main'



const Box = styled.section<ImageSize>`

    width: ${(props: ImageSize) => props?.width ? `${props.width}em` : '10em'};
    height: ${(props: ImageSize) => props?.height ? `${props.height}em` : '10em'};

    display: flex;
    justify-content: center;
    align-items: center;
`


export default Box
