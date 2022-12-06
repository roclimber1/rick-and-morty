


import React from 'react'

import styled from 'styled-components'



export const Line = styled.section`
    display: flex;
    width: 100%;

    margin: 0 0 1em;
    height: 2em;

    background-color: #666;
    color: #fff;
    font-size: 23px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 1px 1px 2px #000;
    text-shadow: 1px 1px 5px #000;
`


const HeaderLine = styled(Line)`
    margin: 0 0 1em;
    height: 3em;
`


const Header = (props) => {

    const { title = '' } = props


    return <HeaderLine>

        {title?.toUpperCase()}

    </HeaderLine>
}




export default Header
