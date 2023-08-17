import React, { useState } from "react";
import styled from "styled-components";
import { theme, COLORS } from "../style";
import {AiOutlineCheck} from "react-icons/ai";

const StyledColor = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 2.5rem;
    height: 2.5rem;
    background: ${(props) => props.color};
    border-radius: 2rem;

    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`
const StyledAllColor = styled.button`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    width: 2.5rem;
    height: 2.5rem;
    background: ${theme.primaryLight};
    border-radius: 2rem;
    
    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`
const Text = styled.span`
    color: ${theme.black};
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;    //줄바꿈 막기
`

const CheckIcon = styled.div`
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    border: solid 0.1rem white;
    color: white;
`

function ColorFilter(props){
    const {color, onClick, isChecked} = props;

    if(color != "전체"){
        let colorinfo = COLORS.find(c => c.color_name === color);
        return (
            <StyledColor onClick={onClick} color={colorinfo.color_code}>
                {isChecked&&<CheckIcon><AiOutlineCheck size={25}/></CheckIcon>}
            </StyledColor>         
            );
    }else{
        return (
            <StyledAllColor onClick={onClick}>
                {isChecked&&<CheckIcon><AiOutlineCheck size={25}/></CheckIcon>}
                <Text>{color}</Text>
            </StyledAllColor>
            );
    }
    
  
}

export default ColorFilter;