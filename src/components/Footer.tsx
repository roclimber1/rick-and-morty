


import React from 'react'

import { useNavigate } from 'react-router-dom'


import styled from 'styled-components'


import { URLS_LIST } from '../constants/main'


import Button from './Button'


import { Line } from './Header'
import { ItemWrapper } from './Wrapper'



const FooterLine = styled(Line)`
    margin: 1em 0 0;
    height: 2em;

    font-size: 18px;
`


interface FooterProps {
    text?: string
}



const Footer: React.FC<FooterProps> = (props) => {

    const navigate = useNavigate()

    const { text = '' } = props


    const handleGoBack = () => navigate(-1)

    const handleGoForward = () => navigate(1)



    return <React.Fragment>

        <ItemWrapper>

            <Button title={'Go back'} onClick={handleGoBack} />

            <Button title={'Characters list'} onClick={() => navigate(URLS_LIST.LIST, { replace: true })} />

            <Button title={'Random character'} onClick={() => navigate(URLS_LIST.HOME, { replace: true })} />

            <Button title={'Go forward'} onClick={handleGoForward} />
        </ItemWrapper>


        <FooterLine>

            {text?.toUpperCase()}
        </FooterLine>

    </React.Fragment>
}




export default Footer
