import React from "react";
import styled from "styled-components";
import { margin, padding } from "../style";

const Background = styled.button`
    display: flex;
    align-items: start;
    justify-content: center;
    width: rem;
    height: 2.5rem;
    background: ${(props) => props.bgcolor};
    padding: ${padding.S};
    border-radius: 0;
`

const StyledColorTag = styled.div`
    width: 2rem;
    height: 1.5rem;
    background: ${(props) => props.color};
`;  

function ColorFilter(props){
    const {bgcolor, color, onClick} = props;
    return (
        <Background bgcolor={bgcolor} onClick={onClick}>
            <StyledColorTag color={color}/>
        </Background>
    );
}

export default ColorFilter;