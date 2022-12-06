

import styled from 'styled-components'



const Box = styled.section`

    width: ${props => props?.width ? `${props.width}em` : '10em'};
    height: ${props => props?.height ? `${props.height}em` : '10em'};

    display: flex;
    justify-content: center;
    align-items: center;
`


export default Box
