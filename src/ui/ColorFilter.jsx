import React, { useState } from "react";
import styled from "styled-components";
import { theme, COLORS } from "../style";

const StyledColor = styled.button`
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    background: ${(props) => props.color};
    border-radius: 2rem;

    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`
const StyledAllColor = styled.button`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    background: ${theme.primaryLight};
    border-radius: 2rem;
    
    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`
const Text = styled.span`
    color: ${theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;    //줄바꿈 막기
`

function ColorFilter(props){
    const {color, onClick} = props;

    if(color != "전체"){
        let colorinfo = COLORS.find(c => c.color_name === color);
        return (
            <StyledColor onClick={onClick} color={colorinfo.color_code}/>         
            );
    }else{
        return (
            <StyledAllColor onClick={onClick}>
                <Text>{color}</Text>
            </StyledAllColor>
            );
    }
    
  
}

export default ColorFilter;