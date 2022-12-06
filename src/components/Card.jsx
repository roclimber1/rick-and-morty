
import React from 'react'


import styled from 'styled-components'




const BaseCard = styled.section`
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;

    height: fit-content;

    background: none;
    border: 1px solid #666;
    border-radius: 5px;

    margin: 5px;
    padding: 10px;

    font-weight: bold;
    color: #666;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: #ccc;
        border: 1px solid #fffc;
        color: #fff;
    }

    &:active {
        opacity: 0.7;
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
