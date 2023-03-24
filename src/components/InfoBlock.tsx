


import React from 'react'


import styled from 'styled-components'





const Info = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`


interface InfoCenteredProps {
    fontSize?: number | null,
    centered?: boolean
}


const InfoCentered = styled(Info)`
    font-size: ${(props: InfoCenteredProps) => props?.fontSize ? `${props.fontSize}px;` : '16px;'}
    ${(props: InfoCenteredProps) => props?.centered ? 'justify-content: center;' : ''}
`


interface InfoBlockProps extends InfoCenteredProps {
    field?: string,
    value?: string
}



const InfoBlock: React.FC<InfoBlockProps> = (props) => {

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
