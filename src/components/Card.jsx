
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




const Card = (props) => {

    const { children = null, name = '', onClick } = props


    const handleClick = (event) => {

        onClick && onClick(event)
    }


    return (<BaseCard
        name={name}
        onClick={handleClick}
    >
        {children}
    </BaseCard>)
}


export default Card
