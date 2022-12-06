


import React from 'react'


import styled from 'styled-components'





const Info = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

const InfoCentered = styled(Info)`
    font-size: ${props => props?.fontSize ? `${props.fontSize}px;` : '16px;'}
    ${props => props?.centered ? 'justify-content: center;' : ''}
`


const InfoBlock = (props) => {

    const { field = '', value = '', fontSize = null } = props


    return <InfoCentered centered={!field} fontSize={fontSize} >

        {Boolean(field) && <div>
            {field}:
        </div>}

        {Boolean(value) && <div>
            {value}
        </div>}

    </InfoCentered>
}




export default InfoBlock
