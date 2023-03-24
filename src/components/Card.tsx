
import React from 'react'


import styled from 'styled-components'




const BaseCard = styled.section`
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;

    height: fit-content;

    background: none;
    border-radius: 5px;
    box-shadow: 1px 1px 6px #666;

    margin: 5px;
    padding: 10px;

    font-weight: bold;
    color: #666;

    display: flex;
    flex-direction: column;

    &:hover {
        background: #cccc;
        color: #fff;
    }

    &:active {
        opacity: 0.9;
    }
`



interface CardProps {
    children?: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLElement>
}



const Card: React.FC<CardProps> = (props) => {

    const { children = null, onClick } = props


    const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {

        onClick && onClick(event)
    }


    return (<BaseCard
        onClick={handleClick}
    >
        {children}
    </BaseCard>)
}



export default Card
