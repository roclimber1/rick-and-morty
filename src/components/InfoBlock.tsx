


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


const InfoCentered = styled(Info)<InfoCenteredProps>`
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

        {field ? (<div>
            {field}:
        </div>) : null}

        {value ? (<div>
            {value}
        </div>) : null}

    </InfoCentered>
}




export default InfoBlock
