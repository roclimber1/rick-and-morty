


import styled from 'styled-components'




const Wrapper = styled.section`
    height: 70%;
    width: 98%;
    padding: 1em;

    display: flex;
    align-items: center;

`


export const ItemWrapper = styled(Wrapper)`
    justify-content: center;
`


export const ListWrapper = styled(Wrapper)`

    overflow: auto;


    &::-webkit-scrollbar {
        width: 1em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #3689f1;
        outline: 1px solid #3689f1;
    }
`



export default Wrapper
