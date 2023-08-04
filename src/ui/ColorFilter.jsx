import React from "react";
import styled from "styled-components";


const StyledColorTag = styled.button`
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.color};
    border-top: 0.1rem solid white;
    border-left: 0.1rem solid white;
    &:last-child{
        border-right: 0.1rem solid white;
    }
    border-radius: 0;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`;  

function ColorFilter(props){
    const {color, onClick} = props;
    return (
        <StyledColorTag  onClick={onClick} color={color}/>
    );
}

export default ColorFilter;