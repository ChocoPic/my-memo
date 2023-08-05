import React from "react";
import styled from "styled-components";
import { theme, COLORS } from "../style";


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
const StyledAll = styled.button`
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
        return <StyledColor onClick={onClick} color={colorinfo.color_code}/>;
    }else{
        return (
            <StyledAll onClick={onClick}>
                <Text>{color}</Text>
            </StyledAll>);
    }
    
  
}

export default ColorFilter;